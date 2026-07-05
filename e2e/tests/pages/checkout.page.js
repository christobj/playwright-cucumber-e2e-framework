const { BasePage } = require('./base.page');

class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
    this.orderCommentTextarea = page.locator('textarea[name="message"]');
    this.placeOrderButton = page.locator('a:has-text("Place Order")');

    this.nameOnCardInput = page.locator('input[data-qa="name-on-card"]');
    this.cardNumberInput = page.locator('input[data-qa="card-number"]');
    this.cvcInput = page.locator('input[data-qa="cvc"]');
    this.expiryMonthInput = page.locator('input[data-qa="expiry-month"]');
    this.expiryYearInput = page.locator('input[data-qa="expiry-year"]');
    this.payButton = page.locator('button[data-qa="pay-button"]');

    this.orderPlacedHeading = page.locator('[data-qa="order-placed"]');
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
