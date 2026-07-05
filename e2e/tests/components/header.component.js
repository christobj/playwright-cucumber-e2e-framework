class HeaderComponent {
  constructor(page) {
    this.page = page;
    this.homeLink = page.locator('a[href="/"]').first();
    this.productsLink = page.locator('a[href="/products"]');
    this.cartLink = page.locator('a[href="/view_cart"]').first();
    this.signupLoginLink = page.locator('a[href="/login"]');
    this.logoutLink = page.locator('a[href="/logout"]');
    this.loggedInAsText = page.getByText(/Logged in as/i);
  }

  async goToProducts() {
    await this.productsLink.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async goToSignupLogin() {
    await this.signupLoginLink.click();
  }

  async logout() {
    await this.logoutLink.click();
  }

  async isLoggedIn() {
    return this.loggedInAsText.isVisible();
  }
}

module.exports = { HeaderComponent };
