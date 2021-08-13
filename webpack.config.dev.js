const webpack = require('webpack');
const path = require('path');

const coreConfig = require('./webpack.config.core');

const serverPort = '9000';

const baseDevConfig = {
  devtool: 'source-map',
  entry: {
    app: ['./src/index.js', 'webpack-hot-middleware/client?reload=true'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()],
};

const devServerConfig = {
  ...baseDevConfig,
  // The normal app entry 'webpack-hot-middleware/client?reload=true' is for
  // Express server hot reloading, so we remove it to avoid conflicts
  entry: {
    app: './src/index.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: process.env.WEBPACK_PORT || 8080,
    // Proxy all /api calls to the serverPort, otherwise they will go to Webpack
    proxy: {
      '/api': `http://localhost:${serverPort}`,
    },
  },
};

module.exports = coreConfig({
  mode: 'development',
  cssModuleHash: '[name]_[local]_[hash:base64:5]',
  webpackConfig: process.env.SEPARATE_UI_AND_SERVER === 'true' ? devServerConfig : baseDevConfig,
});
