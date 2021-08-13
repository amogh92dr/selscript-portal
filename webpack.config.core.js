require('dotenv').config();

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('@catapulthealth/catapult-server-utils/plugins/webpack-manifest-plugin');

const pkg = require('./package.json');
const resolveConfig = require('./webpack.config.resolve');

module.exports = ({ mode = 'production', cssModuleHash = '[hash:base64]', webpackConfig }) => ({
  mode,
  devtool: webpackConfig.devtool,
  devServer: mode !== 'production' ? webpackConfig.devServer : undefined,
  entry: webpackConfig.entry,
  output: {
    path: path.resolve('./public'),
    filename: '[name].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: [/main.css/],
        use: [
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top',
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /main.css/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: cssModuleHash,
              },
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CATAPULT_SSO_PORTAL_DOMAIN: JSON.stringify(process.env.CATAPULT_SSO_PORTAL_DOMAIN),
        CATAPULT_PASSWORD_RESET_DOMAIN: JSON.stringify(process.env.CATAPULT_PASSWORD_RESET_DOMAIN),
        NODE_ENV: JSON.stringify(mode),
        MODE: JSON.stringify(process.env.SYSTEM_ENV || mode),
        VERSION: JSON.stringify(pkg.version),
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en|es)$/),
    new ManifestPlugin(),
    new HtmlWebpackPlugin({ template: './src/template.html' }),
    ...webpackConfig.plugins,
  ],
  resolve: resolveConfig.resolve,
  optimization: {
    minimizer: mode === 'production' ? [new TerserPlugin({ sourceMap: true })] : undefined,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
});
