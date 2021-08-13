'use strict';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter'); // eslint-disable-line import/no-extraneous-dependencies
const serverUtils = require('@catapulthealth/catapult-server-utils');
const supertest = require('supertest'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = (routes = {}) => {
  const mockAdapter = new MockAdapter(axios, { onNoMatch: 'throwException' });
  const { app } = serverUtils
    .serverBuilder()
    .test()
    .applyConfigurations();

  Object.entries(routes).forEach(([route, router]) => {
    app.use(route, router);
  });

  const server = app.listen();
  let agent;
  beforeAll(() => {
    agent = supertest.agent(server);
  });
  beforeEach(() => {
    mockAdapter.reset();
  });
  afterAll(() => {
    server.close();
  });

  return {
    app,
    getAgent: () => agent,
    mockAdapter,
  };
};
