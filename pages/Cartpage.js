const Pageutils = require('../utils/Pageutils');
import { expect } from '@playwright/test';

class Cartpage {
    constructor(page) {
        this.pageutils = new Pageutils(page);
        this.page = page;
        this.searchbar = this.page.getByRole('textbox', { name: 'Search store' }).first();
        this.dressCategoty = this.page.getByText('Dress').first();
        this.dressSubcategory = this.page.locator("//a[normalize-space()='Women']").first();
        this.womenDressSubcat = this.page.getByText('Women - Dress Products').first();
        this.mesDressCategory = this.page.locator("//a[normalize-space()='Men']").first();
        this.tShirtCategory = this.page.getByText("Tshirts ").first();
        this.menTShirtCategory = this.page.getByText("Men - Tshirts Products").first();

        this.cartButton = this.page.getByText(" Cart").first();

        this.subscriptionText = this.page.getByText("Subscription").first();
        this.email = this.page.getByPlaceholder('Your email address');
        this.sucessMessage = this.page.getByText("You have been successfully subscribed!");

    }


    async checkAccordianPosition() {
        const screen = await this.page.evaluate(() => {
            return {
                width: window.screen.width,
                height: window.screen.height
            };
        });
        const leftQuarterMax = screen.width / 4;
        const box = await this.page.locator('#accordian').boundingBox();
        if (box) {
            console.log(`Element x position: ${box.x}`);
            expect(box.x).toBeLessThanOrEqual(leftQuarterMax);
        } else {
            throw new Error("Element not found or not visible.");
        }
    }


    async verifyCategories() {

        await this.pageutils.expectVisible(this.dressSubcategory, "Women category");
        await this.pageutils.click(this.dressSubcategory, "Women category");
        await this.pageutils.expectVisible(this.dressCategoty, "Dress category");
        await this.pageutils.click(this.dressCategoty, "Dress category");
        await this.pageutils.expectVisible(this.womenDressSubcat, "Women Dress Sub category");
        await this.pageutils.click(this.mesDressCategory, "Men category");
        await this.pageutils.click(this.tShirtCategory, "T shirt category");
        await this.pageutils.expectVisible(this.menTShirtCategory, "Men T shirt category");
    }

    async verifySubscrptionsInCart(){
        await this.pageutils.click(this.cartButton, "Cart Button");
        this.subscriptionText.scrollIntoViewIfNeeded();
        await this.page.keyboard.press("Enter")
        await this.pageutils.expectVisible(this.sucessMessage, "You have been successfully subscribed!");
    }
}

module.exports = Cartpage;
