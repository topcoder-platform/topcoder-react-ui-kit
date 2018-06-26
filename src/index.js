import 'styles/global.scss';
import Avatar from 'components/Avatar';
import * as buttons from 'components/buttons';
import * as tags from 'components/tags';

/* eslint-disable global-require */
if (process.env.NODE_ENV === 'production') {
  require('topcoder-react-utils/dist/prod/style.css');
} else {
  require('topcoder-react-utils/dist/dev/style.css');
}
/* eslint-enable global-require */

module.exports = {
  Avatar,
  ...buttons,
  ...tags,
};
