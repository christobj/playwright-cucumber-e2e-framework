const { setWorldConstructor, World } = require('@cucumber/cucumber');

class CustomWorld extends World {
  constructor(options) {
    super(options);
    this.browser = null;
    this.context = null;
    this.page = null;
    this.data = {};
  }

  async attachScreenshot() {
    const buffer = await this.page.screenshot();
    await this.attach(buffer, 'image/png');
  }
}

setWorldConstructor(CustomWorld);

module.exports = { CustomWorld };
