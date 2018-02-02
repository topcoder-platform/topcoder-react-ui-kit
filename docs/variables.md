# Variables
SCSS mixins for standard colors, design breaking points and other global style
constants.

### Base Spacings
*Note:* The constants from this section are defined mostly for documentation
purposes. Although SCSS allows to really encode layout spacings as mathematical
expressions using these constants; it is not practical, as results in less
readable SCSS code and demands one to calculate the resulting values in head to
check whether the numbers match the design specifications (which usually give
the final numbers). Thus, for border radii and spacings prefer to put the final
numbers directly into your SCSS code.
- **`$base-unit`** &mdash; *5px* &mdash; All layout spacings in Topcoder designs
  are multiples of this value.
- **`$corner-radius`** &mdash; *2px* &mdash; All corner radii (`border-radius`
  CSS prop) in Topcoder designs are multiples of this value.

### Colors
[**LIVE DEMO**](https://community-app.topcoder-dev.com/examples/color-mixins) of
mixins for the standard color pallete being used in Topcoder designs. Always use
these color mixins instead of hard-coding HEX color codes into your SCSS code.
