const Pageutils = require('../utils/Pageutils');
const testData = require('../Data/testData.json');

class Searchpage {
    constructor(page) {
        this.pageutils = new Pageutils(page);
        this.page = page;
        this.searchbar = this.page.getByRole('textbox', { name: 'Search store' }).first();
        this.searchButton  = this.page.getByText('Search').first();
    }

    async verifySearchPage(productname){
        const { pageutils } = this;
        await pageutils.expectVisible(this.searchbar,"Searchbar in the homepage");
        await pageutils.sendKeys(this.searchbar,testData.SearchData.productSearch);
        await pageutils.click(this.searchButton,"Search Button")
    }
}

module.exports = Searchpage;
