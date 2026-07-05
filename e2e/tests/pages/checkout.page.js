const { BasePage } = require('./base.page');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    // No data-qa or label on this textarea; name attribute is the only stable hook.
    this.orderCommentTextarea = page.locator('textarea[name="message"]');
    this.placeOrderButton = page.getByRole('link', { name: 'Place Order' });

    this.nameOnCardInput = page.getByTestId('name-on-card');
    this.cardNumberInput = page.getByTestId('card-number');
    this.cvcInput = page.getByTestId('cvc');
    this.expiryMonthInput = page.getByTestId('expiry-month');
    this.expiryYearInput = page.getByTestId('expiry-year');
    this.payButton = page.getByTestId('pay-button');

    this.orderPlacedHeading = page.getByTestId('order-placed');
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async fillPaymentDetails({ nameOnCard, cardNumber, cvc, expiryMonth, expiryYear }) {
    await this.nameOnCardInput.fill(nameOnCard);
    await this.cardNumberInput.fill(cardNumber);
    await this.cvcInput.fill(cvc);
    await this.expiryMonthInput.fill(expiryMonth);
    await this.expiryYearInput.fill(expiryYear);
  }

  async confirmPayment() {
    await this.payButton.click();
  }
}

module.exports = { CheckoutPage };
