'use strict';

const serverUtils = require('@catapulthealth/catapult-server-utils');

const { APP_NAME } = require('../constants');
const { logger, loggerMiddleware } = require('./logger');

const port = '9000';

// Initialize
const { app, catchallMiddleware } = serverUtils
  .serverBuilder()
  .app({ name: APP_NAME, port, logger, loggerMiddleware })
  .setNoCache()
  .applyConfigurations();

module.exports = { app, catchallMiddleware };
