// const { urls } = require('../utils/constants');

// class Hooks {
//     constructor(page) {
//         this.page = page;
//     }

//     async beforeEach() {
//         const { loginPage, registerPage, homepage, searchpage } = require('../utils/pageFactory')(this.page);
//         this.pages = { loginPage, registerPage, homepage, searchpage };
//         await this.page.goto(urls.url); // this.page
//     }

// Not using this implemenation anymore as i have combained hooks with fixtures


//     async afterEach() {
//         console.log('Running afterEach: Clearing cookies and localStorage');
//         await this.page.context().clearCookies();
//         await this.page.evaluate(() => {
//             localStorage.clear();
//             sessionStorage.clear();
//         });
//     }
// }
// module.exports = Hooks;

