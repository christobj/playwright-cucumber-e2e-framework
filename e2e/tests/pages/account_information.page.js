const { BasePage } = require('./base.page');

class AccountInformationPage extends BasePage {
  constructor(page) {
    super(page);
    this.titleMr = page.locator('#id_gender1');
    this.passwordInput = page.getByTestId('password');
    this.daysSelect = page.getByTestId('days');
    this.monthsSelect = page.getByTestId('months');
    this.yearsSelect = page.getByTestId('years');
    this.newsletterCheckbox = page.getByLabel('Sign up for our newsletter!');
    this.firstNameInput = page.getByTestId('first_name');
    this.lastNameInput = page.getByTestId('last_name');
    this.companyInput = page.getByTestId('company');
    this.address1Input = page.getByTestId('address');
    this.address2Input = page.getByTestId('address2');
    this.countrySelect = page.getByTestId('country');
    this.stateInput = page.getByTestId('state');
    this.cityInput = page.getByTestId('city');
    this.zipcodeInput = page.getByTestId('zipcode');
    this.mobileNumberInput = page.getByTestId('mobile_number');
    this.createAccountButton = page.getByTestId('create-account');
    this.accountCreatedHeading = page.getByTestId('account-created');
    this.continueButton = page.getByTestId('continue-button');
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
