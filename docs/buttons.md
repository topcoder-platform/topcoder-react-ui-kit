# Buttons
Themed buttons and button-like links.

[Live demo](https://community-app.topcoder-dev.com/examples/buttons/)

[Examples](#examples)

All these buttons are inherited from the `topcoder-react-utils`'s
[Button](https://github.com/topcoder-platform/topcoder-react-utils/blob/HEAD/docs/button.md).
Check Button's documentation for the details of the programmatical interface all
these buttons provide. `topcoder-react-ui-kit` just takes care about their
proper styling matching the TC UI Kit design specs.

The following buttons types are provided:
- **`Button`**;
- **`DangerButton`**;
- **`GhostButton`**;
- **`PrimaryButton`**;
- **`SecondaryButton`**.

In some cases you may want to access corresponding SCSS stylesheets directly,
to further use them for your custom styling, you can find them in the
[`src/shared/components/buttons/themes`](../src/shared/components/buttons/themes)
folder.

### <a name="examples">Examples</a>
The minimal example:
```jsx
import { PrimaryButton } from 'topcoder-react-ui-kit`;
import React from 'react';

export default function() {
  return (
    <PrimaryButton
      onClick={() => console.log('PrimaryButton was clicked!')}
    >Click Me!</PrimaryButton>
  );
}
```

If you need some ad-hoc styling, here is the minimal example:
```scss
// style.scss

.myButton {
  // In this example we override the default margins around the button. Pay
  // attention to the "!important" instruction, it should be added for each
  // attribute of the ad-hoc style, to ensure that resulting styling does not
  // depend on the order of SCSS rules in the generated CSS bundle (i.e. that
  // the ad-hoc style has the highest priority, no matter the order).
  margin: 40px 0 !important;
}
```

```jsx
// button.jsx

import { PrimaryButton } from 'topcoder-react-ui-kit`;
import React from 'react';

import style from './style.scss';

export default function() {
  return (
    <PrimaryButton
      onClick={() => console.log('PrimaryButton was clicked!')}
      theme={{ button: style.myButton }}
    >Click Me!</PrimaryButton>
  );
}
```
