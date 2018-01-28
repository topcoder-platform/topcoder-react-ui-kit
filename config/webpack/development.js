const configFactory
  = require('topcoder-react-utils/config/webpack/lib-development');
const path = require('path');

const standardConfig = configFactory({
  context: path.resolve(__dirname, '../..'),
  entry: './src',
});

module.exports = standardConfig;
