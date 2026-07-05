const {
  BeforeAll,
  Before,
  After,
  AfterAll,
  Status,
  setDefaultTimeout,
} = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');
const { getConfig } = require('../utils/env.util');

const browsers = { chromium, firefox, webkit };
let browser;

setDefaultTimeout(getConfig().timeout * 2);

BeforeAll(async function () {
  const config = getConfig();
  const launcher = browsers[config.browserName] || chromium;
  browser = await launcher.launch({ headless: config.headless, slowMo: config.slowMo });
});

Before(async function () {
  const config = getConfig();
  this.context = await browser.newContext({ viewport: config.viewport, baseURL: config.baseURL });
  this.context.setDefaultTimeout(config.timeout);
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    await this.attachScreenshot();
  }
  await this.context.close();
});

AfterAll(async function () {
  await browser.close();
});
