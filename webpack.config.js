/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

module.exports = function buildConfig(env) {
  // TODO: This is a temporary workaround for a lib webpack config
  // in topcoder-react-utils v0.3.0
  const config = require(`./config/webpack/${env}.js`);
  if (config.module.noParse && !config.module.noParse.length) {
    delete config.module.noParse;
  }
  return config;
};
