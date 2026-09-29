import { chromium } from "@playwright/test";
import { pages } from "./pages.js";

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const SELECTOR = 'button, [role="button"], [role="tab"]';

const setupPage = await context.newPage();
await setupPage.goto("https://dealerportal.kalyanicrm.com/login", { waitUntil: "domcontentloaded" });
await setupPage.fill('[id="login_id"]', process.env.PORTAL_LOGIN_ID || "bhargavtest");
await setupPage.fill('[id="password"]', process.env.PORTAL_PASSWORD || "bhargav@123");
await Promise.all([
    setupPage.waitForNavigation().catch(() => { }),
    setupPage.click('button[type="submit"]')
]);
await setupPage.close();

const results = [];

for (const url of pages) {
    console.log(`Testing Resiliency: ${url}`);
    let page = await context.newPage();
    let unhandledErrors = [];

    page.on("pageerror", error => {
        unhandledErrors.push(error.message);
    });

    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await page.waitForTimeout(1500);

    const buttons = await page.locator(SELECTOR).count();
    const pageResult = {
        url,
        totalElementsFound: buttons,
        elementsTested: []
    };

    for (let i = 0; i < buttons; i++) {
        const locator = page.locator(SELECTOR).nth(i);
        const isVisible = await locator.isVisible().catch(() => false);

        // Grab the button text for better reporting
        const buttonText = await locator.innerText().catch(() => '(No text)');

        if (!isVisible) {
            pageResult.elementsTested.push({ index: i, text: buttonText, status: "SKIPPED", reason: "Invisible" });
            continue;
        }

        let intercepted = false;
        let interceptedUrl = "";

        // Broaden the sabotage interceptor to catch ANY fetch/xhr request
        await page.route('**/*', async route => {
            const req = route.request();
            if (['fetch', 'xhr'].includes(req.resourceType()) && !req.url().includes('heartbeat')) {
                intercepted = true;
                interceptedUrl = req.url();
                await route.fulfill({
                    status: 500,
                    contentType: 'application/json',
                    body: JSON.stringify({ error: "Simulated Internal Server Error" })
                });
            } else {
                await route.continue();
            }
        });

        const errorsBefore = unhandledErrors.length;

        try {
            await locator.evaluate(node => node.scrollIntoView({ block: "center", behavior: "instant" }));
            await locator.click({ timeout: 3000 });
            await page.waitForTimeout(1000);
        } catch (e) {
            pageResult.elementsTested.push({ index: i, text: buttonText, status: "SKIPPED", reason: "Unclickable" });
            await page.unroute('**/*');
            continue;
        } finally {
            await page.unroute('**/*');
        }

        // Evaluate Resilience
        if (intercepted) {
            const newErrors = unhandledErrors.slice(errorsBefore);

            // Check if the UI rendered an error toast/alert instead of crashing
            const showsErrorUI = await page.evaluate(() => {
                const html = document.body.innerHTML.toLowerCase();
                return html.includes('toast') || html.includes('error') || html.includes('something went wrong') || html.includes('failed');
            });

            if (newErrors.length > 0) {
                pageResult.elementsTested.push({
                    index: i,
                    text: buttonText,
                    status: "FAIL",
                    reason: "Application crashed (Unhandled JS Exception) on 500 error",
                    endpoint: interceptedUrl,
                    errors: newErrors
                });
            } else if (!showsErrorUI) {
                pageResult.elementsTested.push({
                    index: i,
                    text: buttonText,
                    status: "INVESTIGATE",
                    reason: "API failed with 500, but no visible error message was shown to the user (Silent Failure)",
                    endpoint: interceptedUrl
                });
            } else {
                pageResult.elementsTested.push({
                    index: i,
                    text: buttonText,
                    status: "PASS",
                    reason: "API failed with 500, and UI safely displayed an error message",
                    endpoint: interceptedUrl
                });
            }
        } else {
            pageResult.elementsTested.push({
                index: i,
                text: buttonText,
                status: "NO_NETWORK",
                reason: "Button clicked, but no background fetch/xhr request was triggered"
            });
        }

        // Reload to clear error states before testing the next button
        await page.goto(url, { waitUntil: "domcontentloaded" });
        await page.waitForTimeout(500);
    }

    results.push(pageResult);
    await page.close();
}

await browser.close();
console.log(JSON.stringify(results, null, 2));