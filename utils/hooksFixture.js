const { test } = require('@playwright/test');
const { urls } = require('../utils/constants');
const getPages = require('../utils/pageFactory');
const config = require('../configs/configLoader');

const logger = {
  info: (msg) => console.log(`ℹ[INFO] ${new Date().toISOString()} - ${msg}`),
  error: (msg) => console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`),
};

exports.test = test.extend({
  isolatedContext: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },

  hooks: async ({ isolatedContext }, use, testInfo) => {
    const context = isolatedContext;
    const page = await context.newPage();

    await page.goto(config.baseURL);
    const pages = getPages(page);

    try {
      await use({ page, ...pages });
    } catch (err) {
      logger.error(`Exception during test: ${testInfo.title}`);
      logger.error(err.stack || err.message);
      throw err;
    } finally {
      //Take screenshot and attach to Playwright report (for all tests)
      const screenshotBuffer = await page.screenshot();
      await testInfo.attach('screenshot', {
        body: screenshotBuffer,
        contentType: 'image/png',
      });
      logger.info('Attached screenshot to the Playwright report');
      logger.info('Clearing cookies and storage...');
      await page.context().clearCookies();
      await page.evaluate(() => {
        localStorage.clear();
        sessionStorage.clear();
      });

      logger.info(`Finished test: ${testInfo.title}`);
    }
  },
});
