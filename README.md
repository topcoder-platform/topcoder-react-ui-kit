![Dev Build Status](https://img.shields.io/circleci/project/github/topcoder-platform/topcoder-react-ui-kit/develop.svg?label=develop)
![Master Build Status](https://img.shields.io/circleci/project/github/topcoder-platform/topcoder-react-ui-kit/master.svg?label=master)
![Latest NPM Release](https://img.shields.io/npm/v/topcoder-react-ui-kit.svg)
![NPM Downloads](https://img.shields.io/npm/dm/topcoder-react-ui-kit.svg)

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
**NOTE:** This will automatically import all
[global styles from `topcoder-react-utils`](https://github.com/topcoder-platform/topcoder-react-utils/blob/master/docs/global-styles.md)
&mdash; no need do include those separately!

### Global Styles
The import of `topcoder-react-ui-kit/dist/style.css` stylesheet provides you with
(assuming that your Webpack config properly parses that stylesheet, and bundles
all assets referenced from there into your bundle):
- [**Global styles inherited from `topcoder-react-utils`**](https://github.com/topcoder-platform/topcoder-react-utils/blob/HEAD/docs/global-styles.md)
&mdash;
[Eric Meyer's "Reset CSS" 2.0](https://meyerweb.com/eric/tools/css/reset/);
`geometryPrecision` of text rendering;
- [**`Fonts`**](docs/fonts.md) &mdash; Declaration of standard Topcoder fonts;

### Style Mixins
To use any of the style mixins in your SCSS code you should import them as
```scss
@import "~topcoder-react-ui-kit/src/styles/mixins";
```
**NOTE:** It will automatically include all
[SCSS mixins from `topcoder-react-utils`](https://github.com/topcoder-platform/topcoder-react-utils/blob/master/docs/scss-mixins.md)
&mdash; no need to include those separately!

- [**Mixins inherited from `topcoder-react-utils`**](https://github.com/topcoder-platform/topcoder-react-utils/blob/HEAD/docs/scss-mixins.md)
&mdash;
[font definition](https://github.com/topcoder-platform/topcoder-react-utils/blob/HEAD/docs/scss-mixins.md#font-mixins),
[media conditions](https://github.com/topcoder-platform/topcoder-react-utils/blob/HEAD/docs/scss-mixins.md#media-mixins);

- [**`Typography`**](docs/typography-mixins.md) &mdash; Standard mixins for
  body text, fonts, headings, labels, and titles;

- [**`Variables`**](docs/variables.md) &mdash; Standard colors, design break
  points and other global style constants;

### Themed Components
Note that most of these components are inherited from their
[`topcoder-react-utils`](https://www.npmjs.com/package/topcoder-react-utils)
counterparts, and `topcoder-react-ui-kit` just takes care about their proper
theming according to the TC UI Kit design specs.

- [**`Avatar`**](docs/avatar.md) &mdash; Themed avatar;
- [**`Buttons`**](docs/buttons.md) &mdash; Themed buttons;
- [**`ErrorMessage`**](docs/ErrorMessage.md) &mdash; Standard error message;
- [**`Modal`**](docs/Modal.md) &mdash; Standard modal component;
- [**`Tags`**](docs/tags.md) &mdash; Small tags for technologies, event types,
  etc. Technically, they are buttons styled in a different way.

### Development
To develop inside a host package just `$ npm link` it.

CI/CD with CircleCI 2.0 is set up. Commits to the protected `master` branch will
do testing and release to NPM (be sure to properly bump the version with
`$ npm version TYPE`, where `TYPE` is one of `major`/`minor`/`patch`; and
keep in mind that `patch` updates should never break backward compatibility;
if your `minor` or `major` updates includes breaking changes, don't forget
to document those in the [CHANGELOG](CHANGELOG.md)).

*To be written in a better way*

### License
UNLICENSED &mdash; for internal Topcoder projects only.
