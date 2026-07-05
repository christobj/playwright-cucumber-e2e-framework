const { BasePage } = require('./base.page');
const { HeaderComponent } = require('../components/header.component');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.cartRows = page.locator('#cart_info_table tbody tr');
    this.proceedToCheckoutButton = page.locator('a:has-text("Proceed To Checkout")');
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
