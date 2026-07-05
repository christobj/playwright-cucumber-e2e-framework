class HeaderComponent {
  constructor(page) {
    this.page = page;
    const nav = page.locator('.shop-menu');
    this.homeLink = nav.getByRole('link', { name: 'Home' });
    this.productsLink = nav.getByRole('link', { name: 'Products' });
    this.cartLink = nav.getByRole('link', { name: 'Cart' });
    this.signupLoginLink = nav.getByRole('link', { name: 'Signup / Login' });
    this.logoutLink = nav.getByRole('link', { name: 'Logout' });
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
