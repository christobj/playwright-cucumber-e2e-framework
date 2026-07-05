const {
  BeforeAll,
  Before,
  After,
  AfterAll,
  Status,
  setDefaultTimeout,
} = require('@cucumber/cucumber');
const { chromium, firefox, webkit, selectors } = require('playwright');
const { getConfig } = require('../utils/env.util');

const browsers = { chromium, firefox, webkit };
const AD_NETWORK_PATTERN =
  /doubleclick\.net|googlesyndication\.com|googleadservices\.com|google\.com\/pagead|adservice\.google/i;
let browser;

// The site exposes its own test hooks via data-qa; use them as the getByTestId() attribute.
selectors.setTestIdAttribute('data-qa');

setDefaultTimeout(getConfig().timeout * 2);

BeforeAll(async function () {
  const config = getConfig();
  const launcher = browsers[config.browserName] || chromium;
  browser = await launcher.launch({
    headless: config.headless,
    slowMo: config.slowMo,
    args: ['--disable-blink-features=AutomationControlled'],
  });
});

Before(async function () {
  const config = getConfig();
  this.context = await browser.newContext({
    viewport: config.viewport,
    baseURL: config.baseURL,
    userAgent: config.userAgent,
  });
  this.context.setDefaultTimeout(config.timeout);
  await this.context.route(AD_NETWORK_PATTERN, (route) => route.abort());
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
