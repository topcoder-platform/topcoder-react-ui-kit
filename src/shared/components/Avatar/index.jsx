import DefaultUserAvatar from 'assets/images/default-user-avatar.svg';
import React from 'react';
import { themr } from 'react-css-super-themr';
import { Avatar } from 'topcoder-react-utils';

import theme from './style.scss';

export default themr('Avatar', theme)(props =>
  <Avatar DefaultAvatar={DefaultUserAvatar} {...props} />);
