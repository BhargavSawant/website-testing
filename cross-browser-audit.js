import { chromium, firefox, webkit, devices } from "@playwright/test";
import { pages } from "./pages.js";
import { DO_NOT_CLICK } from "./config.js";

// --- PHASE 4: CROSS-BROWSER & MOBILE ENVIRONMENTS ---
const environments = [
    { name: "Desktop Chrome", engine: chromium, contextOptions: {} },
    { name: "Desktop Firefox", engine: firefox, contextOptions: {} },
    { name: "Desktop Safari", engine: webkit, contextOptions: {} },
    {
        name: "Mobile Safari (iPhone 13)",
        engine: webkit,
        contextOptions: { ...devices['iPhone 13'] }
    },
    {
        name: "Mobile Chrome (Pixel 5)",
        engine: chromium,
        contextOptions: { ...devices['Pixel 5'] }
    }
];

const BUTTON_SELECTOR = 'button, [role="button"], [role="tab"], [role="menuitem"]';
const allResults = [];
const allPageInputs = [];

function normalize(value) {
    return (value || "").toLowerCase().replace(/\s+/g, " ").trim();
}

function shouldSkip(element) {
    const combined = normalize([element.text, element.ariaLabel, element.title, element.name].join(" "));
    return DO_NOT_CLICK.some(keyword => combined.includes(normalize(keyword)));
}

// --- PHASE 3: DISCOVER & VALIDATE INPUTS ---
async function discoverInputs(page, currentUrl) {
    return await page.evaluate((url) => {
        const inputs = Array.from(document.querySelectorAll('input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]), textarea, select'));

        return inputs.map((el, index) => {
            let isRequired = el.required || el.getAttribute('aria-required') === 'true';
            if (!isRequired && el.id) {
                const label = document.querySelector(`label[for="${el.id}"]`);
                if (label && label.innerText.includes('*')) isRequired = true;
            }

            return {
                index,
                tag: el.tagName.toLowerCase(),
                type: el.getAttribute('type') || 'text',
                name: el.name || el.id || el.getAttribute('aria-label') || el.placeholder || '(unnamed input)',
                required: isRequired,
                disabled: el.disabled || el.getAttribute('aria-disabled') === 'true',
                hasFormParent: !!el.closest('form')
            };
        });
    }, currentUrl);
}

async function safeValidateInputs(page, discoveredInputs) {
    const testedFields = [];
    const inputLocators = page.locator('input:not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="checkbox"]):not([type="radio"]), textarea, select');

    for (const inputMeta of discoveredInputs) {
        if (inputMeta.disabled) continue;

        try {
            const locator = inputLocators.nth(inputMeta.index);

            const isVisible = await locator.isVisible();
            if (!isVisible) {
                testedFields.push({ ...inputMeta, validationCaught: "SKIPPED", reason: "Element is invisible" });
                continue;
            }

            const isReadOnly = await locator.getAttribute('readonly') !== null;
            if (isReadOnly) {
                testedFields.push({ ...inputMeta, validationCaught: "SKIPPED", reason: "Element is read-only" });
                continue;
            }

            await locator.scrollIntoViewIfNeeded();

            let testPayload = 'Test123!@#';
            if (inputMeta.type === 'email') testPayload = 'invalid-email-format';
            if (['number', 'tel'].includes(inputMeta.type)) testPayload = '9999999999999999';

            let inputRejectedByMask = false;

            if (inputMeta.tag === 'select') {
                await locator.focus();
                await locator.blur();
                testPayload = '(Focused and blurred select)';
            } else {
                await locator.clear();
                await locator.pressSequentially(testPayload, { delay: 10 });
                await locator.blur();

                await page.waitForTimeout(400);

                const valAfter = await locator.inputValue().catch(() => '');
                if (valAfter !== testPayload && valAfter.length < testPayload.length) {
                    inputRejectedByMask = true;
                }
            }

            const ariaInvalid = await locator.getAttribute('aria-invalid');
            const hasErrorTextNearby = await locator.evaluate(node => {
                const container = node.closest('.space-y-2, div, form') || node.parentElement;
                if (!container) return false;
                const html = container.innerHTML.toLowerCase();
                return html.includes('text-red') || html.includes('text-destructive') || html.includes('error');
            });

            let status = "FAIL";
            let reason = "Accepted invalid payload without throwing UI error or masking";

            if (inputRejectedByMask) {
                status = "PASS";
                reason = "Input mask successfully blocked invalid characters";
            } else if (ariaInvalid === 'true' || hasErrorTextNearby) {
                status = "PASS";
                reason = "UI error message or aria-invalid detected upon blur";
            } else if (!inputMeta.hasFormParent && !inputMeta.required) {
                status = "INVESTIGATE";
                reason = "Loose input accepted text. Likely a search/filter bar.";
            }

            testedFields.push({ ...inputMeta, testedPayload: testPayload, validationCaught: status, reason });

        } catch (error) {
            testedFields.push({ ...inputMeta, validationCaught: "ERROR", reason: error.message });
        }
    }
    return testedFields;
}

// --- PHASE 1 & 2: BUTTON DISCOVERY & STATE ---
async function discoverControls(page) {
    return await page.locator(BUTTON_SELECTOR).evaluateAll(elements => {
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
    } catch { }

    const images = await page.locator('img').evaluateAll(imgs => imgs.map(img => img.src).filter(Boolean));

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
            await new Promise(resolve => setTimeout(resolve, 1500));
        }
        try { await route.continue(); } catch { }
    });

    try {
        const locator = page.locator(BUTTON_SELECTOR).nth(elementIndex);
        await locator.evaluate(node => node.scrollIntoView({ block: "center", behavior: "instant" }));
        await locator.click({ clickCount: 3, delay: 100, timeout: 5000 });
        await page.waitForTimeout(2000);
    } catch (error) {
    } finally {
        await page.unroute('**/*');
    }

    return { passed: identicalRequests <= 1, requestsFired: identicalRequests, endpointTriggered: targetUrl };
}

// --- MAIN EXECUTION ---
for (const env of environments) {
    console.log(`\n🚀 Booting environment: ${env.name}`);
    const browser = await env.engine.launch({ headless: true });
    const context = await browser.newContext(env.contextOptions);

    console.log(`Logging in on ${env.name}...`);
    const setupPage = await context.newPage();
    await setupPage.goto("https://dealerportal.kalyanicrm.com/login", { waitUntil: "domcontentloaded", timeout: 30000 });
    await setupPage.fill('[id="login_id"]', process.env.PORTAL_LOGIN_ID || "bhargavtest");
    await setupPage.fill('[id="password"]', process.env.PORTAL_PASSWORD || "bhargav@123");
    await Promise.all([
        setupPage.waitForNavigation({ waitUntil: "networkidle", timeout: 30000 }).catch(() => { }),
        setupPage.click('button[type="submit"], button:has-text("Sign in"), .login-button')
    ]);
    await setupPage.close();
    console.log(`Login complete for ${env.name}.`);

    const envResults = [];

    for (const url of pages) {
        console.log(`[${env.name}] Testing: ${url}`);

        let page = await context.newPage();
        let consoleErrors = [];
        let failedRequests = [];

        page.on("console", message => {
            if (message.type() === "error") consoleErrors.push(message.text());
        });

        // Ignored Aborted requests
        page.on("requestfailed", request => {
            const failureText = request.failure()?.errorText || "";
            if (failureText !== "net::ERR_ABORTED") {
                failedRequests.push({ url: request.url(), method: request.method(), failure: failureText });
            }
        });

        try {
            await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
            await page.waitForTimeout(1500);

            // 1. Run Input Validation
            const discoveredInputs = await discoverInputs(page, url);
            if (discoveredInputs.length > 0) {
                const validationResults = await safeValidateInputs(page, discoveredInputs);
                allPageInputs.push({ environment: env.name, path: url, totalInputs: validationResults.length, fields: validationResults });
            }

            // Reload to clear validation state before button testing
            await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
            await page.waitForTimeout(1000);

            // 2. Discover Buttons
            const interactiveElements = await discoverControls(page);
            const pageResult = { url, title: await page.title(), environment: env.name, interactiveElements: [], consoleErrors: [], failedRequests: [] };

            for (const element of interactiveElements) {
                const elementResult = { id: `element-${element.index + 1}`, tag: element.tag, role: element.role, text: element.text || element.ariaLabel || "(unnamed control)", forcedClick: false, consoleErrors: [], failedRequests: [] };

                if (!element.visible || element.disabled || shouldSkip(element)) {
                    elementResult.status = "SKIPPED";
                    elementResult.reason = !element.visible ? "Not visible" : element.disabled ? "Disabled" : "Matched DO_NOT_CLICK";
                    pageResult.interactiveElements.push(elementResult);
                    continue;
                }

                const locator = page.locator(BUTTON_SELECTOR).nth(element.index);
                const errorsBefore = consoleErrors.length;
                const requestsBefore = failedRequests.length;

                const beforeState = await captureUiState(page, locator);
                elementResult.urlBefore = beforeState.url;
                elementResult.beforeState = beforeState;

                let normalClickError = null;
                let successfulApiFired = false;

                const apiListener = response => {
                    const reqUrl = response.url();
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

                const afterState = await captureUiState(page, page.locator(BUTTON_SELECTOR).nth(element.index));
                elementResult.urlAfter = afterState.url;
                elementResult.afterState = afterState;

                elementResult.consoleErrors = consoleErrors.slice(errorsBefore);
                elementResult.failedRequests = failedRequests.slice(requestsBefore);

                const imagesChanged = JSON.stringify(beforeState.images) !== JSON.stringify(afterState.images);
                const stateChanged =
                    beforeState.url !== afterState.url ||
                    beforeState.dialogs !== afterState.dialogs ||
                    beforeState.menus !== afterState.menus ||
                    beforeState.ariaExpanded !== afterState.ariaExpanded ||
                    beforeState.ariaSelected !== afterState.ariaSelected ||
                    beforeState.ariaPressed !== afterState.ariaPressed ||
                    beforeState.className !== afterState.className ||
                    imagesChanged || successfulApiFired;

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

                await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
                await page.waitForTimeout(1000);

                const debounceResult = await testButtonDebounce(page, element.index);
                elementResult.debounceTest = debounceResult;

                if (!debounceResult.passed) {
                    elementResult.status = "FIRED_MULTIPLES";
                    elementResult.reason = `Debounce failure: API fired ${debounceResult.requestsFired} times on multiple clicks`;
                }

                pageResult.interactiveElements.push(elementResult);

                await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
                await page.waitForTimeout(1000);

                consoleErrors = [];
                failedRequests = [];
            }

            envResults.push(pageResult);

        } catch (error) {
            envResults.push({ url, environment: env.name, status: "PAGE_LOAD_FAILED", error: error.message });
        } finally {
            await page.close();
        }
    }
    allResults.push({ environment: env.name, pages: envResults });
    await browser.close();
}

const allElements = allResults.flatMap(env => env.pages.flatMap(p => p.interactiveElements || []));

const report = {
    generatedAt: new Date().toISOString(),
    auditType: "cross_browser_interactive_and_forms",
    summary: {
        environmentsTested: environments.length,
        pagesTestedPerEnv: pages.length,
        totalElementsTested: allElements.length,
        passed: allElements.filter(e => e.status === "PASS").length,
        failed: allElements.filter(e => e.status === "FAIL").length,
        firedMultiples: allElements.filter(e => e.status === "FIRED_MULTIPLES").length,
        investigate: allElements.filter(e => e.status === "INVESTIGATE").length,
        skipped: allElements.filter(e => e.status === "SKIPPED").length,
        inputsLocated: allPageInputs.reduce((sum, page) => sum + page.totalInputs, 0),
        failuresByEnvironment: environments.reduce((acc, env) => {
            const envElements = allResults.find(r => r.environment === env.name)?.pages.flatMap(p => p.interactiveElements || []) || [];
            acc[env.name] = envElements.filter(e => e.status === "FAIL").length;
            return acc;
        }, {})
    },
    resultsByEnvironment: allResults,
    inputValidation: allPageInputs
};

console.log(JSON.stringify(report, null, 2));