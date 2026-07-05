const { BasePage } = require('./base.page');
const { HeaderComponent } = require('../components/header.component');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.header = new HeaderComponent(page);
    this.subscribeEmailInput = page.locator('#susbscribe_email');
    this.subscribeButton = page.locator('#subscribe');
    this.subscribeSuccessMessage = page.locator('#success-subscribe .alert-success');
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
