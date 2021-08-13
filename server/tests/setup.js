'use strict';

const { logger } = require('../lib/logger');

// Disable bunyan logger during tests
logger.level(100);
