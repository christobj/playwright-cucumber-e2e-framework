const common = {
  requireModule: ['dotenv/config'],
  require: ['e2e/tests/support/**/*.js', 'e2e/tests/step_definition/**/*.js'],
  paths: ['e2e/tests/features/**/*.feature'],
  format: ['@cucumber/pretty-formatter', 'html:reports/cucumber_report.html'],
  formatOptions: { snippetInterface: 'async-await' },
  retry: 1,
};

module.exports = {
  default: common,
};
