require('dotenv/config');

module.exports = {
  baseURL: process.env.BASE_URL || 'https://automationexercise.com',
  browserName: process.env.BROWSER || 'chromium',
  headless: process.env.HEADLESS !== 'false',
  viewport: { width: 1366, height: 768 },
  timeout: Number(process.env.TIMEOUT) || 30000,
  slowMo: Number(process.env.SLOWMO) || 0,
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
};
