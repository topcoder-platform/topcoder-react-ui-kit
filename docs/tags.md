# Tags
Small tags for technologies, event types, etc. Technically, they are
[buttons](buttons.md), styled in a different way.

[Live demo](https://community-app.topcoder-dev.com/examples/tags/)

The following tag types are provided:
- **`Tag`**
- **`DataScienceTrackTag`**
- **`DataScienceTrackEventTag`**
- **`DesignTrackTag`**
- **`DesignTrackEventTag`**
- **`DevelopmentTrackTag`**
- **`DevelopmentTrackEventTag`**

### Example
```jsx
import React from 'react';
import { Tag } from 'topcoder-react-ui-kit';

export default function Example() {
  return <Tag to="REDIRECTION/URL">I am tagged!</Tag>;
}
```
