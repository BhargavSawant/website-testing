import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './',
  // Explicitly match the file you created
  testMatch: 'visual-spec.js',
  timeout: 60000,
  expect: {
    toHaveScreenshot: {
      // Allow a small threshold of pixel differences to prevent flaky tests
      maxDiffPixels: 150, 
    },
  },
  use: {
    trace: 'on-first-retry',
  },
  // Define all the Cross-Browser and Mobile configurations here!
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Mobile Chrome (Pixel 5)',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari (iPhone 13)',
      use: { ...devices['iPhone 13'] },
    },
  ],
});
