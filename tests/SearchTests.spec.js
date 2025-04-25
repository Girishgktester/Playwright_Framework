const Hooks = require('../utils/Hooks');
const { test, expect } = require('../utils/hooksFixture');

// this approach says how we can use Hooks in seperate class and use them in our test class.
// And Custom hooks class  is not beign used in this framework as we have implemented custom fixttures using test.extend

// let testHooks;

// test.beforeEach(async ({ page }) => {
//     testHooks = new Hooks(page); // Instantiate the TestHooks class
//     await testHooks.beforeEach();    // Call beforeEach to initialize page objects
// });

// test.afterEach(async ({ page }) => {
//     await testHooks.afterEach();  // Call afterEach to perform cleanup
// });

// const { searchpage } = testHooks.pages; 


test('@regression HP_TC_01 - Search Page', async ({ hooks }) => {
    const { homepage, searchpage } = hooks;  // Access page objects
    await searchpage.verifySearchPage();
});

