const { BasePage } = require('./base.page');

class AccountInformationPage extends BasePage {
  constructor(page) {
    super(page);
    this.titleMr = page.locator('#id_gender1');
    this.passwordInput = page.locator('#password');
    this.daysSelect = page.locator('#days');
    this.monthsSelect = page.locator('#months');
    this.yearsSelect = page.locator('#years');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.firstNameInput = page.locator('#first_name');
    this.lastNameInput = page.locator('#last_name');
    this.companyInput = page.locator('#company');
    this.address1Input = page.locator('#address1');
    this.address2Input = page.locator('#address2');
    this.countrySelect = page.locator('#country');
    this.stateInput = page.locator('#state');
    this.cityInput = page.locator('#city');
    this.zipcodeInput = page.locator('#zipcode');
    this.mobileNumberInput = page.locator('#mobile_number');
    this.createAccountButton = page.locator('button[data-qa="create-account"]');
    this.accountCreatedHeading = page.locator('[data-qa="account-created"]');
    this.continueButton = page.locator('[data-qa="continue-button"]');
  }

  async fillAccountInformation(user) {
    await this.titleMr.check();
    await this.passwordInput.fill(user.password);
    await this.daysSelect.selectOption(user.dobDay);
    await this.monthsSelect.selectOption({ label: user.dobMonth });
    await this.yearsSelect.selectOption(user.dobYear);
    await this.newsletterCheckbox.check();
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.companyInput.fill(user.company);
    await this.address1Input.fill(user.address1);
    await this.address2Input.fill(user.address2);
    await this.countrySelect.selectOption({ label: user.country });
    await this.stateInput.fill(user.state);
    await this.cityInput.fill(user.city);
    await this.zipcodeInput.fill(user.zipcode);
    await this.mobileNumberInput.fill(user.mobileNumber);
  }

  async submit() {
    await this.createAccountButton.click();
  }

  async continueToHome() {
    await this.continueButton.click();
  }
}

module.exports = { AccountInformationPage };
