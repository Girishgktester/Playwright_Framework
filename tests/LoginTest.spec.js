const { test, expect } = require('../utils/hooksFixture');

test('@smoke Register user', async function ({hooks}) {
    const { registerPage} = hooks; 
    await registerPage.registerUser();    
    await registerPage.enterAccountInfo();
})
