const { BasePage } = require('./base.page');
const { HeaderComponent } = require('../components/header.component');

class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsHeading = page.locator('h2.title', { hasText: 'Searched Products' });
    this.productCards = page.locator('.features_items .product-image-wrapper');
    this.productNames = page.locator('.features_items .productinfo p');
    this.continueShoppingButton = page.locator('button:has-text("Continue Shopping")');
  }

  async goto() {
    await super.goto('/products');
  }

  async search(keyword) {
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
  }

  async addFirstProductToCart() {
    const card = this.productCards.first();
    await card.hover();
    await card.locator('a.add-to-cart').first().click();
  }

  async viewFirstProduct() {
    const card = this.productCards.first();
    await card.hover();
    await card.locator('a:has-text("View Product")').click();
  }
}

module.exports = { ProductsPage };
