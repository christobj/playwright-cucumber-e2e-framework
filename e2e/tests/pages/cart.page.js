const { BasePage } = require('./base.page');
const { HeaderComponent } = require('../components/header.component');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.cartRows = page.locator('#cart_info_table tbody tr');
    // This anchor has no href, so it carries no implicit link role -- match on text instead.
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
  }

  async goto() {
    await super.goto('/view_cart');
  }

  rowByProductName(name) {
    return this.cartRows.filter({ hasText: name });
  }

  async removeProduct(name) {
    await this.rowByProductName(name).locator('.cart_quantity_delete').click();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }
}

module.exports = { CartPage };
