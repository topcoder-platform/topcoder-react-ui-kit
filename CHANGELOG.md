# Topcoder React UI Kit Changelog

### v0.5.4
Adds **Modal**, and **ErrorMessage** component.

### v0.4.0
Update to the latest **topcoder-react-utils**, and also better way to pack
the library for release.

**Breaking Changes:**
- This version of the library requires a new way to include its global
  stylesheet into the host code.

  You should replace, in the root ReactJS component of your app, this:
  ```jsx
  import 'topcoder-react-ui-kit/dist/style.css';
  ```

  with this:
  ```jsx
  /* eslint-disable global-require */
  if (process.env.NODE_ENV === 'production') {
    require('topcoder-react-ui-kit/dist/prod/style.css');
  } else {
    require('topcoder-react-ui-kit/dist/dev/style.css');
  }
  /* eslint-enable global-require */
  ```

### v0.3.0
Update of dependencies. Should not introduce breaking changes, but, just in
case, tagged as minor version update.

### v0.2.0
- **[Breaking change]:** The following color constants have been dropped:
  `$tc-dark-blue-90`, `$tc-gold-70`, `$tc-gold-30`, `$tc-gold-10`; use instead:
  `$tc-dark-blue`, `$tc-yellow-70`, `$tc-yellow-30`, `tc-yellow-10`.

- Values of `$tc-gold`, `$tc-silver`, `$tc-bronze` color constants are updated
  (metal colors for placements, etc.). Additional colors introduced:
  `$tc-gold-110`, `$tc-gold-130`, `$tc-silver-110`, `$tc-silver-130`,
  `$tc-bronze-110`, `$tc-bronze-130`; these are intended for text color
  inside areas filled by metal colors: use `110` color variants for middle
  font size and larger, use `130` for small text size.

### v0.1.0
The first release.

### v0.0.x
Pre-release drafts of the initial package version. A big journey starts here.
