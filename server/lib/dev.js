'use strict';

const webpack = require('webpack'); // eslint-disable-line
const webpackConfig = require('../../webpack.config.dev.js'); // eslint-disable-line
const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
const webpackHotMiddleware = require('webpack-hot-middleware'); // eslint-disable-line
const history = require('connect-history-api-fallback'); // eslint-disable-line
const compiler = webpack(webpackConfig);

function configureDevServer(app) {
  console.log(`webpack is building...`); // eslint-disable-line no-console

  // Make router routes work (devServer historyApiFallback=true but for devMiddleware)
  app.use(history());

  app.use(
    webpackDevMiddleware(compiler, {
      hot: true,
      filename: 'bundle.js',
      stats: {
        colors: true,
        chunkModules: false,
      },
      publicPath: webpackConfig.output.publicPath,
    }),
  );

  app.use(
    webpackHotMiddleware(compiler, {
      log: console.log, // eslint-disable-line
      path: '/__webpack_hmr',
      heartbeat: 10 * 1000,
    }),
  );
}

module.exports = configureDevServer;
