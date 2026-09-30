import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './',
  // Explicitly match the file you created
  testMatch: 'visual-spec.js',
  timeout: 120000,
  reporter: 'html',
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
    // Setup project for authentication
    { name: 'setup', testMatch: /.*\.setup\.js/ },
    {
      name: 'Desktop Chrome',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'Desktop Safari',
      use: { 
        ...devices['Desktop Safari'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'Desktop Firefox',
      use: { 
        ...devices['Desktop Firefox'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'Mobile Chrome (Pixel 5)',
      use: { 
        ...devices['Pixel 5'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'Mobile Safari (iPhone 13)',
      use: { 
        ...devices['iPhone 13'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});
