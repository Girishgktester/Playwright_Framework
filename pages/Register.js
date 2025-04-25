const Pageutils = require('../utils/Pageutils');
const { generateUser } = require('../Data/FakerTestData');


class Register {

    constructor(page) {

        this.page = page;
        this.pageutils = new Pageutils(page);
        this.singuploginBtn = this.page.getByText(" Signup / Login").first();
        this.newUserName = this.page.locator("input[placeholder='Name']");
        this.newUserEmail = this.page.locator("input[data-qa='signup-email']");
        this.singupButtonNewUser = this.page.locator("button[data-qa='signup-button']");
        this.genderRadioBtn = this.page.locator("#id_gender1");
        this.passwordInputbox = this.page.locator("#password")
        this.monthDropdown = this.page.locator("#months");
        this.yearDropdown = this.page.locator("#years");
        this.daysDropdown = this.page.locator("#days");
        this.newsletterCheckbox = this.page.locator("#newsletter")
        this.firstName = this.page.locator("#first_name");
        this.lastName = this.page.locator("#last_name");
        this.companyName = this.page.locator("#company");
        this.address1 = this.page.locator("#address1");
        this.address2 = this.page.locator("#address2");
        this.countryDropdow = this.page.locator("#country")
        this.stateInputbox = this.page.locator("#state")
        this.cityInputbox  = this.page.locator("#city")
        this.zipcodeInputbox = this.page.locator("#zipcode")
        this.mobileNumberInputBox = this.page.locator("#mobile_number")
        this.createAccountButton = this.page.getByText("Create Account");
    }

    async registerUser() {
        const { pageutils } = this;
        const user = generateUser();
        await pageutils.expectVisible(this.singuploginBtn," Signup / Login buttons displayed in Homepage");
        await pageutils.click(this.singuploginBtn, "Singup login button")
        await pageutils.expectVisible(this.newUserName,"Name filed is dislayed  in Homepage");
        await pageutils.expectVisible(this.newUserEmail,"Email filed is displayed in Homepage");
        await pageutils.fill(this.newUserName,user.name)
        await pageutils.fill(this.newUserEmail,user.email)
        await pageutils.expectVisible(this.singupButtonNewUser,"Sing up buttons displayed in Homepage");
        await pageutils.click(this.singupButtonNewUser, "Singup button")
    }

    async enterAccountInfo(){
        const { pageutils } = this;
        const user = generateUser();
        await pageutils.click(this.genderRadioBtn,"Gender radio button")
        await pageutils.fill(this.passwordInputbox,user.password);
        await pageutils.fill(this.firstName,user.name);
        await pageutils.fill(this.lastName,user.password);
        await pageutils.fill(this.passwordInputbox,user.lastname);
        await pageutils.selectDropdownOption(this.daysDropdown,"1")
        await pageutils.selectDropdownOption(this.monthDropdown,"April")
        await pageutils.fill(this.companyName,"Test company");
        await pageutils.fill(this.address1,"Address 1");
        await pageutils.fill(this.address2,"Address 2");
        await pageutils.selectDropdownOption(this.countryDropdow,"India")
        await pageutils.fill(this.stateInputbox,"Delhi");
        await pageutils.fill(this.cityInputbox,"Delhi");
        await pageutils.fill(this.zipcodeInputbox,"123456");
        await pageutils.fill(this.mobileNumberInputBox,"123456789");
        await pageutils.click(this.createAccountButton,"Create account button")
    }
}

module.exports = Register;