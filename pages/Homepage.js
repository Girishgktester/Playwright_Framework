const Pageutils = require('../utils/Pageutils');
const testData = require('../Data/testData.json');
import { expect, test } from '@playwright/test';


class Homepage {

    constructor(page) {

        this.pageutils = new Pageutils(page);
        this.page = page;
        this.homeLogo = this.page.locator("img[alt='nopCommerce demo store']");
        this.computersTab = this.page.getByText('Computers').first();
        this.electronictab = this.page.getByText('Electronics').first();
        this.apparelTabs = this.page.getByText('Apparel').first();
        this.digitalDiwnloadsTab = this.page.getByText('Digital downloads').first();
        this.booksTabs = this.page.getByText('Books').first();
        this.jewelryTab = this.page.getByText('Jewelry').first();
        this.giftCardsTab  = this.page.getByText('Gift Cards').first();

    }

    async verifyHomePage() {
        await this.pageutils.expectVisible(this.homeLogo, "Logo Should be visible in the homepage")
    }
    
    async checkForConsoleErrors(page) {
        let hasConsoleError = false;
        let errorMessage = '';
        this.page.on('console', msg => {
            if (msg.type() === 'error') {
                hasConsoleError = true;
                errorMessage = msg.text();
            }
        });

        await this.page.waitForTimeout(1000);
        if (hasConsoleError) {
            await test.info().attach('Console Error', {
                body: errorMessage,
                contentType: 'text/plain'
            });
        } else {
            await test.info().attach('Console Log Check', {
                body: '✅ No console errors detected',
                contentType: 'text/plain'
            });
            expect(errorMessage, 'Console should not contain errors').toBe('');
        }
    }

    async verifyHomePageLogoFunctionality() {
        const { pageutils } = this;
        await pageutils.assertElementIsClickable(this.homeLogo, "Logo in Homepage")
        await pageutils.isVisible(this.homeLogo);
    }

    async verifyHeaderTabs(){
        const { pageutils } = this;
        await pageutils.expectVisible(this.computersTab,"Computers Tabs in homepage");
        await pageutils.expectVisible(this.electronictab,"Electrnics Tabs in homepage");
        await pageutils.expectVisible(this.apparelTabs,"Appereal Tabs in homepage");
        await pageutils.expectVisible(this.digitalDiwnloadsTab,"Digital dwnloads Tabs headers in homepage");
        await pageutils.expectVisible(this.jewelryTab,"Jewelry Tabs in homepage");
        await pageutils.expectVisible(this.giftCardsTab,"Gift cards Tabs in homepage");
        await pageutils.takeScreenshot("Homepage verification screenshot")
    }
}

module.exports = Homepage; // if this statment is missed then cannot use this page related objects/methods