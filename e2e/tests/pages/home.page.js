const { BasePage } = require('./base.page');
const { HeaderComponent } = require('../components/header.component');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.subscribeEmailInput = page.getByPlaceholder('Your email address');
    this.subscribeButton = page.locator('#subscribe');
    this.subscribeSuccessMessage = page.getByText(/successfully subscribed/i);
  }

  async goto() {
    await super.goto('/');
  }

  async subscribe(email) {
    await this.subscribeEmailInput.scrollIntoViewIfNeeded();
    await this.subscribeEmailInput.fill(email);
    await this.subscribeButton.click();
  }
}

module.exports = { HomePage };
