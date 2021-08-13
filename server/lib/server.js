'use strict';

const serverUtils = require('@catapulthealth/catapult-server-utils');

const { APP_NAME } = require('../constants');
const { logger, loggerMiddleware } = require('./logger');
const permissions = require('../permissions');

const port = '9000';

// Initialize
const { app, requireUserPermissions, catchallMiddleware } = serverUtils
  .serverBuilder()
  .app({ name: APP_NAME, port, logger, loggerMiddleware, permissions })
  .setSso({
    routes: '/api',
    propertyName: 'staff',
  })
  .setNoCache()
  .setStatus([])
  .applyConfigurations();

module.exports = { app, requireUserPermissions, catchallMiddleware };
