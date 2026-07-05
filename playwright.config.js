require('dotenv/config');

module.exports = {
  baseURL: process.env.BASE_URL || 'https://automationexercise.com',
  browserName: process.env.BROWSER || 'chromium',
  headless: process.env.HEADLESS !== 'false',
  viewport: { width: 1366, height: 768 },
  timeout: Number(process.env.TIMEOUT) || 30000,
  slowMo: Number(process.env.SLOWMO) || 0,
};
