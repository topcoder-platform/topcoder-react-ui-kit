/* NOTE: Order of imports is important here, this is also the reason to
 * avoid `import` instructions, as they are silently re-ordered on top by
 * the compiler. */

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  require('topcoder-react-utils/dist/prod/style.css');
} else {
  require('topcoder-react-utils/dist/dev/style.css');
}
/* eslint-enable global-require */

require('styles/global.scss');

const Avatar = require('components/Avatar').default;
const buttons = require('components/buttons');
const tags = require('components/tags');

module.exports = {
  Avatar,
  ...buttons,
  ...tags,
};
