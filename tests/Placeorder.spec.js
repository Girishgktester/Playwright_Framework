const { test, expect } = require('../utils/hooksFixture');

test('@smoke Place order', async function ({hooks}) {
    const { placeorder} = hooks; 
    await placeorder.loginToApplication();  
    await placeorder.addTocart();
    await placeorder.procedToCheckout();
    await placeorder.makeCardPayment();
    await placeorder.placeOrderAndVerifyOrderConfrmation();
    await placeorder.verifyInoiceDownload();
})