const { execSync } = require('child_process');
const path = require('path');

const reportPath = path.join(__dirname, '..', 'reports', 'cucumber_report.html');
const openCommand =
  process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start ""' : 'xdg-open';

execSync(`${openCommand} "${reportPath}"`);
