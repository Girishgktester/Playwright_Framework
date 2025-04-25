const { test } = require('@playwright/test');  // Add this line to import Playwright's test object
const fs = require('fs');
const path = require('path');
const { urls } = require('../utils/constants');
const getPages = require('../utils/pageFactory');
const config = require('../configs/configLoader'); //  loaded config


const logger = {
  info: (msg) => console.log(`ℹ[INFO] ${new Date().toISOString()} - ${msg}`),
  error: (msg) => console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`),
};

exports.test = test.extend({  // Change base to test here
  isolatedContext: async ({ browser }, use) => {
    const context = await browser.newContext();
    await use(context);
    await context.close();
  },

  hooks: async ({ isolatedContext }, use, testInfo) => {
    const context = isolatedContext;
    const page = await context.newPage();
    
    // const envSpecificURL = process.env.ENV === 'qa' ? urls.qa : urls.dev; // Example for dynamic URL based on ENV
    // await page.goto(envSpecificURL, { timeout: 30000 });  // Adding a timeout to avoid hanging

    await page.goto(config.baseURL);  // Assuming you have defined this in constants.js
    const pages = getPages(page);  // Factory method for additional helpers

    try {
      await use({ page, ...pages });
    } catch (err) {
      logger.error(`Exception during test: ${testInfo.title}`);
      logger.error(err.stack || err.message);
      throw err;
    } finally {
      if (testInfo.status === 'failed') {
        const screenshotDir = path.join(__dirname, '..', 'screenshots');
        if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const filePath = path.join(screenshotDir, `${testInfo.title.replace(/\s+/g, '_')}_${timestamp}.png`);

        await page.screenshot({ path: filePath });
        logger.info(`Saved failure screenshot: ${filePath}`);
      }

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