// cucumber.js
let common = [
    'testbdd/features/**/*.feature',                // Specify our feature files
    '--require-module ts-node/register',    // Load TypeScript module
    '--require testbdd/step-definitions/**/*.ts',   // Load step definitions
    '--format progress-bar',                // Load custom formatter
    '--publish-quiet'
  ].join(' ');
  
module.exports = {
  default: common
};