const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { faker } = require('@faker-js/faker');
const { HomePage } = require('../pages/home.page');

Given('I am on the Automation Exercise home page', async function () {
  const homePage = new HomePage(this.page);
  await homePage.goto();
});

Then('the page title should contain {string}', async function (expectedTitle) {
  const title = await this.page.title();
  expect(title).to.include(expectedTitle);
});

Then(
  'the {string}, {string}, {string} and {string} navigation links should be visible',
  async function (_home, _products, _cart, _signupLogin) {
    const homePage = new HomePage(this.page);
    const links = [
      homePage.header.homeLink,
      homePage.header.productsLink,
      homePage.header.cartLink,
      homePage.header.signupLoginLink,
    ];
    for (const link of links) {
      await link.waitFor({ state: 'visible' });
      expect(await link.isVisible()).to.be.true;
    }
  }
);

When('I subscribe to the newsletter with a valid email address', async function () {
  const homePage = new HomePage(this.page);
  await homePage.subscribe(faker.internet.email());
});

Then('I should see the subscription success message', async function () {
  const homePage = new HomePage(this.page);
  await homePage.subscribeSuccessMessage.waitFor({ state: 'visible' });
  expect(await homePage.subscribeSuccessMessage.textContent()).to.include(
    'successfully subscribed'
  );
});
