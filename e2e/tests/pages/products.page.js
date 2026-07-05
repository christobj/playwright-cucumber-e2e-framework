const { BasePage } = require('./base.page');
const { HeaderComponent } = require('../components/header.component');

class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.searchInput = page.getByPlaceholder('Search Product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsHeading = page.getByRole('heading', { name: 'Searched Products' });
    this.productCards = page.locator('.features_items .product-image-wrapper');
    this.productNames = this.productCards.locator('.productinfo p');
    this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
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
    await card.getByText('Add to cart').first().click();
  }

  async viewFirstProduct() {
    const card = this.productCards.first();
    await card.hover();
    await Promise.all([
      this.page.waitForURL(/\/product_details\//),
      card.getByRole('link', { name: 'View Product' }).click(),
    ]);
  }
}

module.exports = { ProductsPage };
