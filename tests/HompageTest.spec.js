const { test, expect } = require('../utils/hooksFixture');

test('@regression HP_TC_01 Verify the website loads successfully Open the site and ensure the homepage displays without errors.', async ({ hooks }) => {
    const { homepage, searchpage } = hooks;  // Access page objects
    await homepage.verifyHomePage();
    await homepage.checkForConsoleErrors();
    await homepage.verifyHomePageLogoFunctionality();
    await homepage.verifyHeaderTabs();
})


