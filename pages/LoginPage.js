const Pageutils = require('../utils/Pageutils');
const testData = require('../Data/testData.json');

// Convert one part to string from json
// const userString = JSON.stringify(testData.validUser);
// console.log(userString);

class LoginPage {

    constructor(page) {
        this.pageutils = new Pageutils(page); 
        this.page = page;

        this.userName = this.page.locator("#Email");
        this.password = this.page.locator("#Password");
        this.loginButton = this.page.locator("button[class='button-1 login-button']");
        this.loginLink  = this.page.getByText('Log in').first();  
    }

    async verifyLogin(){
        await this.pageutils.expectVisible(this.loginLink, "Login link in Homepage is displayed")
        await this.pageutils.click(this.loginLink,"Login link")
        await this.pageutils.expectVisible(this.userName, "Login page is displayed")
        await this.pageutils.sendKeys(this.userName, testData.validUser.email);
        await this.pageutils.sendKeys(this.password, testData.validUser.password);
        await this.pageutils.click(this.loginButton, "Login Button");
    }
}
module.exports = LoginPage;