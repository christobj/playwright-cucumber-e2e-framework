class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(path = '/') {
    await this.page.goto(path);
    await this.waitPastInterstitial();
  }

  async waitPastInterstitial() {
    const isInterstitial = async () => (await this.page.title()) === 'One moment, please...';
    if (!(await isInterstitial())) return;

    await this.page
      .waitForFunction(() => document.title !== 'One moment, please...', null, {
        timeout: 20000,
      })
      .catch(async () => {
        await this.page.reload();
      });
  }
}

module.exports = { BasePage };
