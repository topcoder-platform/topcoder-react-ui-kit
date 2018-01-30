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
