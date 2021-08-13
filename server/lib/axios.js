'use strict';

const axios = require('axios');

module.exports = req => {
  const instance = axios.create();

  instance.interceptors.request.use(config => {
    const { operatorId } = req.staff || {};

    if (operatorId) {
      const headersWithAuth = Object.assign(config.headers, {
        consumerId: 'seleniumscript-portal',
        'Cata-Audit': JSON.stringify({ operatorId }),
      });
      config.headers = headersWithAuth; // eslint-disable-line no-param-reassign
    }

    return config;
  }, Promise.reject);

  return instance;
};
