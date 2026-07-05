const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { ProductsPage } = require('../pages/products.page');
const { CartPage } = require('../pages/cart.page');

async function addFirstProductToCart(world) {
  const productsPage = new ProductsPage(world.page);
  world.data.productName = (await productsPage.productNames.first().textContent()).trim();
  await productsPage.addFirstProductToCart();
  await productsPage.continueShoppingButton.waitFor({ state: 'visible' });
  await productsPage.continueShoppingButton.click();
}

When('I add the first product to the cart', async function () {
  await addFirstProductToCart(this);
});

Given('I have added the first product to the cart', async function () {
  await addFirstProductToCart(this);
});

When('I view the cart', async function () {
  const cartPage = new CartPage(this.page);
  await cartPage.goto();
});

Then('the cart should contain {int} product', async function (expectedCount) {
  const cartPage = new CartPage(this.page);
  const count = await cartPage.cartRows.count();
  expect(count).to.equal(expectedCount);
});

When('I remove that product from the cart', async function () {
  const cartPage = new CartPage(this.page);
  await cartPage.removeProduct(this.data.productName);
  await cartPage.rowByProductName(this.data.productName).waitFor({ state: 'detached' });
});

Then('the cart should be empty', async function () {
  const cartPage = new CartPage(this.page);
  const count = await cartPage.cartRows.count();
  expect(count).to.equal(0);
});
