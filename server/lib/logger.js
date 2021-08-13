'use strict';

const serverUtils = require('@catapulthealth/catapult-server-utils');

const { APP_NAME } = require('../constants');

const { logger, middleware: loggerMiddleware } = serverUtils.createLoggerAndMiddleware(APP_NAME);

module.exports = { logger, loggerMiddleware };
