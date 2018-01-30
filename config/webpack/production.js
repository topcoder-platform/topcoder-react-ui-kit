const configFactory
  = require('topcoder-react-utils/config/webpack/lib-production');
const path = require('path');

const standardConfig = configFactory({
  context: path.resolve(__dirname, '../..'),
  entry: './src',
  library: 'topcoder-react-ui-kit',
});

module.exports = standardConfig;
