const { test, expect } = require('../utils/hooksFixture');

test('@smoke Verify Categories', async ({ hooks }) => {
    const {cartpage, placeorder } = hooks;  // Access page objects
    await placeorder.loginToApplication();
    await cartpage.checkAccordianPosition();
    await cartpage.verifyCategories();
});


