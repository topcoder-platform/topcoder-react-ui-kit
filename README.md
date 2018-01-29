# Topcoder React UI Kit

The [Topcoder](https://www.topcoder.com) UI Kit for internal ReactJS projects.

### Installation
Install the package via NPM:
```
$ npm install --save topcoder-react-ui-kit
```

Import its global stylesheet into the root ReactJS component of your app:
```jsx
import 'topcoder-react-ui-kit/dist/style.css';
```

### Global Styles
The import of `topcoder-react-ui-kit/dist/style.css` stylesheet provides you with
(assuming that your Webpack config properly parses that stylesheet, and bundles
all assets referenced from there into your bundle):
- [**`Fonts`**](docs/fonts.md) &mdash; Declaration of standard Topcoder fonts;

### Style Mixins
To use any of the style mixins in your SCSS code you should import them as
```scss
@import "~topcoder-react-ui-kit/src/styles/mixins";
```
- [**`Variables`**](docs/variables.md) &mdash; Standard colors, design break
  points and other global style constants;

### Development
*To be written*

### License
UNLICENSED &mdash; for internal Topcoder projects only.
