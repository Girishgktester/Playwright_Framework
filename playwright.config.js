const { defineConfig } = require('@playwright/test');

const browserName = process.env.BROWSER?.toLowerCase();

// Fetch environment-specific configuration (default to 'dev' if none is provided)
const ENV = process.env.ENV || 'dev';
const envConfig = require(`./configs/${ENV}.js`);

const browserConfigs = {
  chromium: {
    name: 'Chromium',
    use: { browserName: 'chromium', headless: false },
  },
  firefox: {
    name: 'Firefox',
    use: { browserName: 'firefox', headless: false },
  },
  webkit: {
    name: 'WebKit',
    use: { browserName: 'webkit', headless: false },
  },
};

// If BROWSER is passed, use only that browser; else use all (cross-browser)
const projects = browserName ? [browserConfigs[browserName]] : Object.values(browserConfigs);

module.exports = defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  fullyParallel: false,
  expect: {
    timeout: 40 * 1000,
  },
  reporter: [
    ['list'], // Default list reporter
    // [FlakyTestReporter, {}],  WIP
    ['html', { outputFolder: 'playwright-report', open: 'always' }],
  ],

  retries: process.env.CI ? 2 : 0, // Retry failed tests in CI environment (2 retries) or no retries locally
  use: {
    baseURL: envConfig.baseURL, // Base URL defined in your environment config
    headless: false, // Launch browsers in headless mode for CI; can be toggled per environment
    screenshot: 'only-on-failure', // Capture screenshots only on test failures
    trace: 'retain-on-failure', // Retain traces only on failure to debug issues
    video: 'retry-with-video', // Record video for tests that fail on retry
    args: ['--start-maximized'], // Launch browser in maximized mode for better visual debugging
    viewport: { width: 1280, height: 720 }, // Set default viewport size for consistency
    ignoreHTTPSErrors: true, // Ignore SSL errors if necessary
    permissions: ['geolocation'], // Set necessary permissions for geolocation-based tests
  },
  projects, // Use the browser configurations defined earlier
  workers: 20, // Number of workers for parallel execution (adjust based on your machine capacity)
  outputDir: 'test-results', // Directory to store test results and artifacts
});