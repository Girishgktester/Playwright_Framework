const Pageutils = require('../utils/Pageutils');
const { generateUser } = require('../Data/FakerTestData');
const { expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');


class Placeorder {
    constructor(page) {

        this.page = page;
        this.pageutils = new Pageutils(page);

        this.singuploginBtn = this.page.getByText(" Signup / Login").first();
        this.emailAddress = this.page.getByPlaceholder("Email Address").first();
        this.passwordInputBox = this.page.getByPlaceholder("Password");
        this.loginButton = this.page.locator("button[data-qa='login-button']").first();
        this.hoverOnProduct = this.page.locator('[data-product-id="1"]').first();
        this.viewCart = this.page.getByText("View Cart").first();
        this.proceedToCheckoutBtn = this.page.getByText("Proceed To Checkout");
        this.messagetxt = this.page.locator("textarea[name='message']");
        this.placeOrderBtn = this.page.getByText("Place Order");
        this.nameOnThecardTxt = this.page.locator("input[name='name_on_card']");
        this.cardNumber = this.page.locator("input[name='card_number']");
        this.cvv = this.page.locator("input[placeholder='ex. 311']");
        this.month = this.page.locator("input[placeholder='MM']");
        this.year = this.page.locator("input[placeholder='YYYY']");
        this.payAndConfirmOrder = this.page.getByText("Pay and Confirm Order");
        this.orderPlacedSucessMessage = this.page.getByText("Order Placed!");
        this.downloadInvoiceBbtn = this.page.getByText("Download Invoice");
    }

    async loginToApplication() {
        const { pageutils } = this;
        await this.pageutils.expectVisible(this.singuploginBtn, "Singup/ login button displayed in hompage");
        await pageutils.click(this.singuploginBtn, "Singup / login button");
        await pageutils.fill(this.emailAddress, "Test@Tester1.com");
        await pageutils.fill(this.passwordInputBox, "Admin123");
        await pageutils.click(this.loginButton, "Login Button");
    }

    async addTocart() {
        const { pageutils } = this;
        await pageutils.hoverOnElement(this.hoverOnProduct, "Hover on product")
        await pageutils.click(this.hoverOnProduct, "Product")
        await pageutils.click(this.viewCart, "View cart")
    }

    async procedToCheckout() {
        const { pageutils } = this;
        await pageutils.expectVisible(this.proceedToCheckoutBtn, "Proced to checkout button is displayed in Cart");
        await pageutils.click(this.proceedToCheckoutBtn, "Proced to checkout button")
        await pageutils.click(this.placeOrderBtn, "Place order button")

    }

    async makeCardPayment() {
        const { pageutils } = this;
        await pageutils.fill(this.nameOnThecardTxt, "Test user");
        await pageutils.fill(this.cardNumber, "123456789");
        await pageutils.fill(this.month, "0112");
        await pageutils.fill(this.year, "2025");
        await pageutils.fill(this.cvv, "123");
    }

    async placeOrderAndVerifyOrderConfrmation() {
        const { pageutils } = this;
        await pageutils.click(this.payAndConfirmOrder, "Pay and Confirm Order");
        await pageutils.expectVisible(this.orderPlacedSucessMessage, "Order Placed!");
    }

    async verifyInoiceDownload(clickSelector, downloadDir = __dirname) {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.downloadInvoiceBbtn.click()
        ]);
        const fileName = download.suggestedFilename();
        const filePath = path.join(downloadDir, fileName);
        await download.saveAs(filePath);
        const success = fs.existsSync(filePath);
        let content = null;
        if (success) {
            content = fs.readFileSync(filePath, 'utf-8');
            console.log("File content:\n", content);
        }
        expect(content).toMatch("Hi Test User, Your total purchase amount is 500. Thank you");
        return { success, filePath, content };
    }
}

module.exports = Placeorder;