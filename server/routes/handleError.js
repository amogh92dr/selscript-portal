'use strict';

const { StructError } = require('superstruct');

const { logger } = require('../lib/logger');

const handleError = (err, req, res) => {
  if (err instanceof StructError) {
    logger.warn({ req_id: req.id }, err.message);
    if (process.env.SYSTEM_ENV === 'production') {
      res.sendStatus(400);
    } else {
      res.status(400).send({ StructError: err.message });
    }
    return;
  }
  logger.warn({ req_id: req.id, err }, 'Request Failure');
  res.sendStatus((err.response && err.response.status) || 500);
};

module.exports = handleError;
