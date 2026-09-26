import { chromium } from "@playwright/test";
import { pages } from "./pages.js";
import { DO_NOT_CLICK } from "./config.js";

const browser = await chromium.launch({ headless: false });
const context = await browser.newContext();

console.log("Logging in...")
const setupPage = await context.newPage();

await setupPage.goto("https://dealerportal.kalyanicrm.com/login", {
    waitUntil: "domcontentloaded",
    timeout: 30000
});

await setupPage.fill('[id="login_id"]', process.env.PORTAL_LOGIN_ID || "bhargavtest");
await setupPage.fill('[id="password"]', process.env.PORTAL_PASSWORD || "bhargav@123");

await Promise.all([
    setupPage.waitForNavigation({ waitUntil: "networkidle", timeout: 30000 }).catch(() => { }),
    setupPage.click('button[type="submit"], button:has-text("Sign in"), .login-button')
]);

await setupPage.close();
console.log("Login complete.");

const results = [];
const SELECTOR = 'button, [role="button"], [role="tab"], [role="menuitem"], [role="switch"], input[type="button"], input[type="submit"], input[type="reset"], summary';

function normalize(value) {
    return (value || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function shouldSkip(element) {
    const combined = normalize([element.text, element.ariaLabel, element.title, element.name].join(" "));
    return DO_NOT_CLICK.some(keyword => combined.includes(normalize(keyword)));
}

async function discoverControls(page) {
    return await page.locator(SELECTOR).evaluateAll(elements => {
        return elements.map((el, index) => {
            const rect = el.getBoundingClientRect();
            return {
                index,
                tag: el.tagName.toLowerCase(),
                role: el.getAttribute("role") || (el.tagName.toLowerCase() === "button" ? "button" : null),
                text: (el.innerText || "").trim(),
                ariaLabel: el.getAttribute("aria-label"),
                title: el.getAttribute("title"),
                disabled: el.disabled || el.getAttribute("aria-disabled") === "true",
                visible: rect.width > 0 && rect.height > 0
            };
        });
    });
}

async function captureUiState(page, locator) {
    let elementState = { ariaExpanded: null, ariaSelected: null, ariaPressed: null, className: null };
    try {
        elementState.ariaExpanded = await locator.getAttribute("aria-expanded");
        elementState.ariaSelected = await locator.getAttribute("aria-selected");
        elementState.ariaPressed = await locator.getAttribute("aria-pressed");
        elementState.className = await locator.getAttribute("class");
    } catch { } // Locator might be detached after click

    // Extract all visible image sources to detect carousel/slider changes
    const images = await page.locator('img').evaluateAll(imgs => 
        imgs.map(img => img.src).filter(Boolean)
    );

    return {
        url: page.url(),
        dialogs: await page.locator('dialog, [role="dialog"]').count(),
        menus: await page.locator('[role="menu"], .dropdown-menu, [role="listbox"]').count(),
        images,
        ...elementState
    };
}

async function testButtonDebounce(page, elementIndex) {
    let identicalRequests = 0;
    let targetUrl = null;
    let targetMethod = null;

    await page.route('**/*', async (route, request) => {
        const method = request.method();

        if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
            if (!targetUrl) {
                targetUrl = request.url();
                targetMethod = method;
            }

            if (request.url() === targetUrl && method === targetMethod) {
                identicalRequests++;
            }

            // Hold the response to simulate network latency and allow rapid clicks
            await new Promise(resolve => setTimeout(resolve, 1500));
        }
        try {
            await route.continue();
        } catch {
            // Route was already handled/aborted by page navigation
        }
    });

    try {
        const locator = page.locator(SELECTOR).nth(elementIndex);

        await locator.evaluate(node => {
            node.scrollIntoView({ block: "center", behavior: "instant" });
        });

        // Rapid triple-click
        await locator.click({ clickCount: 3, delay: 100, timeout: 5000 });
        await page.waitForTimeout(2000);

    } catch (error) {
        // Element might become disabled or detach, which is fine during a debounce test
    } finally {
        await page.unroute('**/*');
    }

    return {
        passed: identicalRequests <= 1,
        requestsFired: identicalRequests,
        endpointTriggered: targetUrl
    };
}

for (const url of pages) {
    console.log(`Testing: ${url}`);

    let page = await context.newPage();
    let consoleErrors = [];
    let failedRequests = [];

    page.on("console", message => {
        if (message.type() === "error") consoleErrors.push(message.text());
    });

    page.on("requestfailed", request => {
        failedRequests.push({
            url: request.url(),
            method: request.method(),
            failure: request.failure()?.errorText || null
        });
    });

    try {
        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
        await page.waitForTimeout(1500);

        const interactiveElements = await discoverControls(page);

        const pageResult = {
            url,
            title: await page.title(),
            interactiveElements: [],
            consoleErrors: [],
            failedRequests: []
        };

        for (const element of interactiveElements) {
            const elementResult = {
                id: `element-${element.index + 1}`,
                tag: element.tag,
                role: element.role,
                text: element.text || element.ariaLabel || "(unnamed control)",
                forcedClick: false,
                consoleErrors: [],
                failedRequests: []
            };

            if (!element.visible || element.disabled || shouldSkip(element)) {
                elementResult.status = "SKIPPED";
                elementResult.reason = !element.visible ? "Not visible" : element.disabled ? "Disabled" : "Matched DO_NOT_CLICK";
                pageResult.interactiveElements.push(elementResult);
                continue;
            }

            // --- PHASE 1: STANDARD CLICK TEST ---
            const locator = page.locator(SELECTOR).nth(element.index);
            const errorsBefore = consoleErrors.length;
            const requestsBefore = failedRequests.length;

            const beforeState = await captureUiState(page, locator);
            elementResult.urlBefore = beforeState.url;
            elementResult.beforeState = beforeState;

            let normalClickError = null;
            let successfulApiFired = false;

            // Listen for successful network requests triggered by the click
            const apiListener = response => {
                const reqUrl = response.url();
                // Flag as true if it's a successful API call, ignoring background heartbeats
                if (reqUrl.includes('/api/') && !reqUrl.includes('/heartbeat') && response.ok()) {
                    successfulApiFired = true;
                }
            };

            page.on('response', apiListener);

            try {
                await locator.evaluate(node => node.scrollIntoView({ block: "center", behavior: "instant" }));
                await locator.click({ timeout: 5000 });
            } catch (error) {
                normalClickError = error.message;
                try {
                    elementResult.forcedClick = true;
                    await locator.click({ timeout: 5000, force: true });
                } catch (forceError) {
                    elementResult.status = "FAIL";
                    elementResult.reason = forceError.message;
                    elementResult.normalClickError = normalClickError;

                    page.off('response', apiListener);
                    pageResult.interactiveElements.push(elementResult);
                    await page.goto(url, { waitUntil: "domcontentloaded" });
                    continue;
                }
            }

            await page.waitForTimeout(1000);
            page.off('response', apiListener);

            const afterState = await captureUiState(page, page.locator(SELECTOR).nth(element.index));
            elementResult.urlAfter = afterState.url;
            elementResult.afterState = afterState;

            elementResult.consoleErrors = consoleErrors.slice(errorsBefore);
            elementResult.failedRequests = failedRequests.slice(requestsBefore);

            // Check if the image arrays differ
            const imagesChanged = JSON.stringify(beforeState.images) !== JSON.stringify(afterState.images);

            // Evaluate state change
            const stateChanged =
                beforeState.url !== afterState.url ||
                beforeState.dialogs !== afterState.dialogs ||
                beforeState.menus !== afterState.menus ||
                beforeState.ariaExpanded !== afterState.ariaExpanded ||
                beforeState.ariaSelected !== afterState.ariaSelected ||
                beforeState.ariaPressed !== afterState.ariaPressed ||
                beforeState.className !== afterState.className ||
                imagesChanged ||
                successfulApiFired;

            if (elementResult.consoleErrors.length > 0 || elementResult.failedRequests.length > 0) {
                elementResult.status = "FAIL";
                elementResult.reason = "Interaction produced console or network errors";
            } else if (successfulApiFired && !imagesChanged) {
                elementResult.status = "PASS";
                elementResult.reason = "Click triggered successful background API request";
            } else if (imagesChanged) {
                elementResult.status = "PASS";
                elementResult.reason = "Click resulted in image/carousel change";
            } else if (stateChanged) {
                elementResult.status = "PASS";
                elementResult.reason = "UI state, classes, or URL changed successfully";
            } else {
                elementResult.status = "INVESTIGATE";
                elementResult.reason = "Click succeeded but no observable UI/URL change occurred";
            }

            // --- PHASE 2: DEBOUNCE TEST ---
            // Reload to reset state before rapid-clicking
            await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
            await page.waitForTimeout(1000);

            const debounceResult = await testButtonDebounce(page, element.index);
            elementResult.debounceTest = debounceResult;

            if (!debounceResult.passed) {
                elementResult.status = "FAIL";
                elementResult.reason = `Debounce failure: Button fired ${debounceResult.requestsFired} identical network requests`;
            }

            pageResult.interactiveElements.push(elementResult);

            // Reload again to prep a clean slate for the NEXT element in the loop
            await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
            await page.waitForTimeout(1000);

            // Clear arrays to prevent error bleeding between elements
            consoleErrors = [];
            failedRequests = [];
        }

        results.push(pageResult);

    } catch (error) {
        results.push({ url, status: "PAGE_LOAD_FAILED", error: error.message });
    } finally {
        await page.close();
    }
}

await browser.close();

const allElements = results.flatMap(p => p.interactiveElements || []);

const report = {
    generatedAt: new Date().toISOString(),
    auditType: "interactive",
    summary: {
        pagesTested: pages.length,
        totalElementsTested: allElements.length,
        passed: allElements.filter(e => e.status === "PASS").length,
        failed: allElements.filter(e => e.status === "FAIL").length,
        firedMultiples: allElements.filter(e => e.debounceTest && !e.debounceTest.passed).length,
        investigate: allElements.filter(e => e.status === "INVESTIGATE").length,
        skipped: allElements.filter(e => e.status === "SKIPPED").length
    },
    pages: results
};

console.log(JSON.stringify(report, null, 2));