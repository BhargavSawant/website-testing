import { chromium } from "@playwright/test";
import { pages } from "./pages.js";
import { DO_NOT_CLICK } from "./config.js";

const browser = await chromium.launch({
    headless: false
});

const context = await browser.newContext();

console.log("Logging in...");

const setupPage = await context.newPage();

await setupPage.goto(
    "https://dealerportal.kalyanicrm.com/login",
    {
        waitUntil: "domcontentloaded",
        timeout: 30000
    }
);

await setupPage.fill(
    '[id="login_id"]',
    process.env.PORTAL_LOGIN_ID || "bhargavtest"
);

await setupPage.fill(
    '[id="password"]',
    process.env.PORTAL_PASSWORD || "bhargav@123"
);

await Promise.all([
    setupPage.waitForNavigation({
        waitUntil: "networkidle",
        timeout: 30000
    }).catch(() => { }),

    setupPage.click(
        'button[type="submit"], button:has-text("Sign in"), .login-button'
    )
]);

await setupPage.close();

console.log("Login complete.");

const results = [];

function normalize(value) {
    return (value || "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();
}

function normalizeUrl(url) {
    if (!url) return "";

    try {
        const parsed = new URL(url);

        let pathname = parsed.pathname;

        if (pathname.length > 1) {
            pathname = pathname.replace(/\/+$/, "");
        }

        return (
            parsed.origin +
            pathname +
            parsed.search +
            parsed.hash
        ).toLowerCase();

    } catch {
        return url
            .replace(/\/+$/, "")
            .toLowerCase();
    }
}

function resolveUrl(href, baseUrl) {
    try {
        return new URL(href, baseUrl).href;
    } catch {
        return null;
    }
}

function isExternalUrl(href, currentUrl) {
    try {
        const target = new URL(href, currentUrl);
        const current = new URL(currentUrl);

        return target.origin !== current.origin;

    } catch {
        return false;
    }
}

function shouldSkip(element) {
    const combined = normalize(
        [
            element.text,
            element.ariaLabel,
            element.title,
            element.name,
            element.href
        ].join(" ")
    );

    return DO_NOT_CLICK.some(keyword =>
        combined.includes(normalize(keyword))
    );
}

async function discoverLinks(page) {
    return await page.locator("a").evaluateAll(elements => {

        return elements.map((el, index) => {

            const rect = el.getBoundingClientRect();

            return {
                index,
                text: (el.innerText || "").trim(),
                ariaLabel: el.getAttribute("aria-label"),
                title: el.getAttribute("title"),
                name: el.getAttribute("name"),
                href: el.getAttribute("href"),
                target: el.getAttribute("target"),
                disabled:
                    el.getAttribute("aria-disabled") === "true",
                visible:
                    rect.width > 0 &&
                    rect.height > 0,
                x: Math.round(rect.x),
                y: Math.round(rect.y),
                width: Math.round(rect.width),
                height: Math.round(rect.height)
            };

        });

    });
}

function buildOccurrences(elements) {

    const counts = new Map();

    return elements.map(element => {

        const key =
            `${element.href || ""}::${element.text || ""}`;

        const occurrence =
            counts.get(key) || 0;

        counts.set(key, occurrence + 1);

        return {
            ...element,
            occurrence
        };

    });
}

for (const url of pages) {

    console.log(`Testing: ${url}`);

    const page = await context.newPage();

    const consoleErrors = [];
    const failedRequests = [];

    page.on("console", message => {

        if (message.type() === "error") {
            consoleErrors.push(message.text());
        }

    });

    page.on("requestfailed", request => {

        failedRequests.push({
            url: request.url(),
            method: request.method(),
            failure:
                request.failure()?.errorText || null
        });

    });

    try {

        await page.goto(url, {
            waitUntil: "domcontentloaded",
            timeout: 30000
        });

        await page.waitForTimeout(1500);

        const discovered =
            await discoverLinks(page);

        const interactiveElements =
            buildOccurrences(discovered);

        const pageResult = {
            url,
            title: await page.title(),
            interactiveElements: [],
            consoleErrors,
            failedRequests
        };

        for (const element of interactiveElements) {

            const elementResult = {
                id: `element-${element.index + 1}`,
                element:
                    element.text ||
                    element.ariaLabel ||
                    element.title ||
                    "(unnamed link)",
                type: "link",
                href: element.href,
                from: url
            };

            if (!element.visible) {

                elementResult.status = "SKIPPED";
                elementResult.classification = "NOT_VISIBLE";
                elementResult.reason = "Link is not visible";

                pageResult.interactiveElements.push(
                    elementResult
                );

                continue;
            }

            if (element.disabled) {

                elementResult.status = "SKIPPED";
                elementResult.classification = "DISABLED";
                elementResult.reason = "Link is disabled";

                pageResult.interactiveElements.push(
                    elementResult
                );

                continue;
            }

            if (!element.href) {

                elementResult.status = "SKIPPED";
                elementResult.classification = "NON_NAVIGABLE";
                elementResult.reason = "Link has no href";

                pageResult.interactiveElements.push(
                    elementResult
                );

                continue;
            }

            if (shouldSkip(element)) {

                elementResult.status = "SKIPPED";
                elementResult.classification = "DO_NOT_CLICK";
                elementResult.reason =
                    "Matched DO_NOT_CLICK rule";

                pageResult.interactiveElements.push(
                    elementResult
                );

                continue;
            }

            if (isExternalUrl(element.href, url)) {

                elementResult.status = "SKIPPED";
                elementResult.classification = "EXTERNAL";
                elementResult.reason = "External link skipped";

                pageResult.interactiveElements.push(
                    elementResult
                );

                continue;
            }

            const expectedUrl =
                resolveUrl(element.href, url);

            const expectedNormalized =
                normalizeUrl(expectedUrl);

            elementResult.expectedTo = expectedUrl;

            const locator = page.locator(
                `a[href="${element.href}"]`
            ).first();

            const elementCount = await locator.count();
            if (elementCount === 0) {
                elementResult.status = "FAIL";
                elementResult.classification = "LOCATOR_ERROR";
                elementResult.reason = "Could not identify the discovered link";

                pageResult.interactiveElements.push(elementResult);
                continue;
            }

            const errorsBefore =
                consoleErrors.length;

            const requestsBefore =
                failedRequests.length;

            const clickStart =
                Date.now();

            let forcedClick = false;
            let normalClickError = null;

            try {

                await locator.evaluate(node => {

                    node.scrollIntoView({
                        block: "center",
                        behavior: "instant"
                    });

                });

                await locator.click({
                    timeout: 10000
                });

            } catch (error) {

                normalClickError =
                    error.message;

                try {

                    forcedClick = true;

                    await locator.click({
                        timeout: 10000,
                        force: true
                    });

                } catch (forceError) {

                    elementResult.status = "FAIL";

                    elementResult.classification =
                        "CLICK_ERROR";

                    elementResult.reason =
                        forceError.message;

                    elementResult.normalClickError =
                        normalClickError;

                    elementResult.forcedClick = true;

                    elementResult.durationMs =
                        Date.now() - clickStart;

                    elementResult.consoleErrors =
                        consoleErrors.slice(
                            errorsBefore
                        );

                    elementResult.failedRequests =
                        failedRequests.slice(
                            requestsBefore
                        );

                    pageResult.interactiveElements.push(
                        elementResult
                    );

                    try {

                        await page.goto(url, {
                            waitUntil:
                                "domcontentloaded",
                            timeout: 30000
                        });

                        await page.waitForTimeout(700);

                    } catch { }

                    continue;
                }
            }

            await page.waitForTimeout(700);

            const toUrl =
                normalizeUrl(page.url());

            const fromUrl =
                normalizeUrl(url);

            elementResult.to =
                page.url();

            elementResult.navigation =
                fromUrl !== toUrl;

            elementResult.forcedClick =
                forcedClick;

            elementResult.durationMs =
                Date.now() - clickStart;

            elementResult.consoleErrors =
                consoleErrors.slice(
                    errorsBefore
                );

            elementResult.failedRequests =
                failedRequests.slice(
                    requestsBefore
                );

            if (toUrl === expectedNormalized) {

                elementResult.status = "PASS";
                
                if (fromUrl === toUrl) {
                    elementResult.classification = "SAME_PAGE";
                    elementResult.reason = "Link points to the current page";
                } else {
                    elementResult.classification = "NAVIGATION";
                    elementResult.reason = "Navigated to href destination";
                }

            } else if (toUrl === fromUrl) {

                elementResult.status = "INVESTIGATE";
                elementResult.classification = "NO_NAVIGATION";
                elementResult.reason = "Click completed but URL did not change";

            } else {

                elementResult.status = "FAIL";
                elementResult.classification = "WRONG_DESTINATION";
                elementResult.reason = "URL changed but does not match href destination";
            }

            pageResult.interactiveElements.push(
                elementResult
            );

            try {

                if (
                    normalizeUrl(page.url()) !==
                    fromUrl
                ) {

                    await page.goto(url, {
                        waitUntil:
                            "domcontentloaded",
                        timeout: 30000
                    });

                    await page.waitForTimeout(700);

                }

            } catch (error) {

                console.log(
                    `Recovery failed: ${error.message}`
                );

            }
        }

        results.push(pageResult);

    } catch (error) {

        results.push({
            url,
            status: "PAGE_LOAD_FAILED",
            error: error.message
        });

    } finally {

        await page.close();

    }
}

await browser.close();

let total = 0;
let passed = 0;
let failed = 0;
let investigate = 0;
let skipped = 0;
let automationErrors = 0;

const classifications = {};

for (const page of results) {

    if (!page.interactiveElements) {
        continue;
    }

    for (const element of page.interactiveElements) {

        total++;

        const classification =
            element.classification ||
            "UNKNOWN";

        classifications[classification] =
            (classifications[classification] || 0) + 1;

        if (element.status === "PASS") {

            passed++;

        } else if (element.status === "FAIL") {

            if (
                classification ===
                "CLICK_ERROR" ||
                classification ===
                "LOCATOR_ERROR"
            ) {
                automationErrors++;
            } else {
                failed++;
            }

        } else if (
            element.status === "INVESTIGATE"
        ) {

            investigate++;

        } else if (
            element.status === "SKIPPED"
        ) {

            skipped++;

        }

    }
}

const report = {

    generatedAt:
        new Date().toISOString(),

    auditType:
        "navigation",

    summary: {

        pagesTested:
            pages.length,

        totalNavigationTests:
            total,

        passed,

        failed,

        investigate,

        automationErrors,

        skipped,

        classifications

    },

    pages: results

};

console.log(
    JSON.stringify(
        report,
        null,
        2
    )
);