const fs = require('fs');
const path = require('path');
const reporter = require('cucumber-html-reporter');

const jsonReportPath = path.join(__dirname, '..', 'reports', 'cucumber_report.json');

if (!fs.existsSync(jsonReportPath)) {
  console.warn(`No JSON report found at ${jsonReportPath}, skipping HTML report generation.`);
  process.exit(0);
}

reporter.generate({
  theme: 'bootstrap',
  jsonFile: jsonReportPath,
  output: path.join(__dirname, '..', 'reports', 'cucumber_report.html'),
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    'Test Environment': process.env.BASE_URL || 'https://automationexercise.com',
    Browser: `${process.env.BROWSER || 'chromium'}`,
    Platform: process.platform,
  },
});
