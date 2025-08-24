import { defineConfig, devices } from '@playwright/test';

import dotenv from 'dotenv';
import path from 'path';

//set .env path
const dotEnvPath = process.env.TEST_ENV ? `.env.${process.env.TEST_ENV}` : '.env'
// Read from ".env" file.
dotenv.config({ 
  path: path.resolve(__dirname, dotEnvPath),
  override:true 
});

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:  [
    ['allure-playwright'], 
    ['html', { open: 'never' }]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: process.env.BASE_URL_WEB!,
    screenshot:'only-on-failure',
    video: 'off', 
    headless: true,
    trace: 'retain-on-first-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }

  ]
});
