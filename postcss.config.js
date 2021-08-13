/* eslint-disable import/no-extraneous-dependencies */
const postcssImport = require('postcss-import');
const postcssCustomProps = require('postcss-custom-properties');
const postcssColors = require('postcss-color-function');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssImport,
    postcssCustomProps({ preserve: 'computed', warnings: false }),
    postcssColors,
    cssnano({ preset: 'default' }),
  ],
};
/* eslint-enable import/no-extraneous-dependencies */
