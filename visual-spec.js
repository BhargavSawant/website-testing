import { test, expect } from '@playwright/test';
import { pages } from './pages.js';

// Run this test loop for every page in your array
pages.forEach((url) => {
    test(`Visual Regression: ${url}`, async ({ page }) => {
        // 1. Log in via the UI before taking screenshots
        await page.goto("https://dealerportal.kalyanicrm.com/login");
        await page.fill('[id="login_id"]', process.env.PORTAL_LOGIN_ID || "bhargavtest");
        await page.fill('[id="password"]', process.env.PORTAL_PASSWORD || "bhargav@123");
        await Promise.all([
            page.waitForNavigation({ waitUntil: "networkidle" }).catch(() => { }),
            page.click('button[type="submit"], button:has-text("Sign in")')
        ]);

        // 2. Navigate to the target page
        await page.goto(url, { waitUntil: "networkidle" });

        // Hide dynamic elements that frequently change (like timestamps or live counts) to prevent false failures
        // Update this CSS selector to target elements on your portal that update constantly
        await page.addStyleTag({ content: '.timestamp, .live-count { visibility: hidden !important; }' });

        // Wait for images and animations to settle
        await page.waitForTimeout(2000);

        // 3. Capture screenshot and compare it to the baseline
        // Playwright will automatically scroll and capture the entire length of the page
        await expect(page).toHaveScreenshot({ fullPage: true, maxDiffPixels: 100 });
    });
});