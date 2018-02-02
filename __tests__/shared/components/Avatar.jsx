import Avatar from 'components/Avatar';
import React from 'react';
import { snapshot } from 'topcoder-react-utils/jest-utils';

test('Snapshots', () => {
  snapshot(<Avatar />);
});
