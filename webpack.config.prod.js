const webpack = require('webpack');

const coreConfig = require('./webpack.config.core');

module.exports = coreConfig({
  mode: 'production',
  cssModuleHash: '[hash:base64]',
  webpackConfig: {
    devtool: 'nosources-source-map',
    entry: {
      app: './src/index.js',
    },
    plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
  },
});
