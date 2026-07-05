const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { HomePage } = require('../pages/home.page');
const { LoginPage } = require('../pages/login.page');
const { AccountInformationPage } = require('../pages/account_information.page');
const { generateUser } = require('../utils/data.util');

async function registerNewUser(world) {
  const homePage = new HomePage(world.page);
  await homePage.header.goToSignupLogin();

  world.data.user = generateUser();
  const loginPage = new LoginPage(world.page);
  await loginPage.signup(world.data.user.name, world.data.user.email);

  const accountInfoPage = new AccountInformationPage(world.page);
  await accountInfoPage.fillAccountInformation(world.data.user);
  await accountInfoPage.submit();
  await accountInfoPage.accountCreatedHeading.waitFor({ state: 'visible' });
  await accountInfoPage.continueToHome();
}

When('I navigate to the Signup \\/ Login page', async function () {
  const homePage = new HomePage(this.page);
  await homePage.header.goToSignupLogin();
});

When('I sign up with a new random name and email', async function () {
  this.data.user = generateUser();
  const loginPage = new LoginPage(this.page);
  await loginPage.signup(this.data.user.name, this.data.user.email);
});

When('I fill in the account information and submit', async function () {
  const accountInfoPage = new AccountInformationPage(this.page);
  await accountInfoPage.fillAccountInformation(this.data.user);
  await accountInfoPage.submit();
});

Then('my account should be created successfully', async function () {
  const accountInfoPage = new AccountInformationPage(this.page);
  await accountInfoPage.accountCreatedHeading.waitFor({ state: 'visible' });
  expect(await accountInfoPage.accountCreatedHeading.textContent()).to.include('Account Created!');
  await accountInfoPage.continueToHome();
});

Then('I should be logged in', async function () {
  const homePage = new HomePage(this.page);
  await homePage.header.loggedInAsText.waitFor({ state: 'visible' });
  expect(await homePage.header.isLoggedIn()).to.be.true;
});

When('I attempt to log in with an invalid email and password', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.login('nonexistent.user@example.com', 'wrongPassword123');
});

Then('I should see a login error message', async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.loginErrorMessage.waitFor({ state: 'visible' });
  expect(await loginPage.loginErrorMessage.isVisible()).to.be.true;
});

Given('I am logged in as a new user', async function () {
  const homePage = new HomePage(this.page);
  await homePage.goto();
  await registerNewUser(this);
});

When('I log out', async function () {
  const homePage = new HomePage(this.page);
  await homePage.header.logout();
});

Then('I should see the Signup \\/ Login navigation link again', async function () {
  const homePage = new HomePage(this.page);
  await homePage.header.signupLoginLink.waitFor({ state: 'visible' });
  expect(await homePage.header.signupLoginLink.isVisible()).to.be.true;
});
