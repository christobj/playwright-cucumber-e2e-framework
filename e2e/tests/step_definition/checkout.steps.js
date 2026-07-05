const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { CartPage } = require('../pages/cart.page');
const { CheckoutPage } = require('../pages/checkout.page');

When('I proceed to checkout', async function () {
  const cartPage = new CartPage(this.page);
  await cartPage.proceedToCheckout();
});

When('I place the order with a comment', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.orderCommentTextarea.fill('Please deliver during business hours. Thanks!');
  await checkoutPage.placeOrder();
});

When('I fill in the payment details and confirm payment', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.fillPaymentDetails({
    nameOnCard: this.data.user.name,
    cardNumber: '4111111111111111',
    cvc: '123',
    expiryMonth: '12',
    expiryYear: '2030',
  });
  await checkoutPage.confirmPayment();
});

Then('my order should be placed successfully', async function () {
  const checkoutPage = new CheckoutPage(this.page);
  await checkoutPage.orderPlacedHeading.waitFor({ state: 'visible' });
  expect(await checkoutPage.orderPlacedHeading.textContent()).to.include('Order Placed!');
});
