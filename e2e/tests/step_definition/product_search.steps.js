const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { ProductsPage } = require('../pages/products.page');

Given('I navigate to the Products page', async function () {
  const productsPage = new ProductsPage(this.page);
  await productsPage.goto();
});

When('I search for the product {string}', async function (keyword) {
  this.data.searchTerm = keyword;
  const productsPage = new ProductsPage(this.page);
  await productsPage.search(keyword);
});

Then('the {string} heading should be visible', async function (headingText) {
  const productsPage = new ProductsPage(this.page);
  await productsPage.searchedProductsHeading.waitFor({ state: 'visible' });
  expect(await productsPage.searchedProductsHeading.textContent()).to.include(headingText);
});

Then('at least one displayed product should relate to {string}', async function (keyword) {
  const productsPage = new ProductsPage(this.page);
  const names = await productsPage.productNames.allTextContents();
  expect(names.length).to.be.greaterThan(0);
  const matches = names.some((name) => name.toLowerCase().includes(keyword.toLowerCase()));
  expect(matches).to.be.true;
});

When('I view the first product in the list', async function () {
  const productsPage = new ProductsPage(this.page);
  await productsPage.viewFirstProduct();
});

Then('I should be taken to the product details page', async function () {
  await this.page.waitForURL(/\/product_details\//);
  expect(this.page.url()).to.include('/product_details/');
});
