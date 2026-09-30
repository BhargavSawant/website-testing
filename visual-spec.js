import { test, expect } from '@playwright/test';
import { pages } from './pages.js';

test.describe('Visual Specs', () => {

    // Run this test loop for every page in your array
    pages.forEach((url) => {
        test(`Visual Regression: ${url}`, async ({ page }) => {
            // 2. Navigate to the target page (already authenticated via storageState)
            await page.goto(url, { waitUntil: "domcontentloaded" });

            // Allow the application to finish rendering
            await page.waitForTimeout(3000);

            await expect(page).toHaveScreenshot({
                fullPage: true,
            });
        });
    });
});