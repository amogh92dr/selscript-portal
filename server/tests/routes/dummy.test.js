'use strict';

const start = require('../testServer');
const routes = require('../../routes/dummy');
const { HEALTHEVAL_SERVICE_URL } = require('../../constants');

const { getAgent, mockAdapter } = start({ '/': routes });

describe('/dummy routes', () => {
  describe('GET /:id', () => {
    test('Returns a dummy record', async () => {
      const dummyRecord = { id: 'id', name: 'dummy record' };
      mockAdapter.onGet(`${HEALTHEVAL_SERVICE_URL}/dummyRecord/id`).reply(200, dummyRecord);
      const { body, status } = await getAgent()
        .get('/id')
        .set('cata-audit', '{"operatorId": 1234}')
        .send();
      expect(status).toEqual(200);
      expect(body).toEqual(dummyRecord);
    });

    test('Returns a 500 with no body if an error occurs', async () => {
      mockAdapter.onGet(`${HEALTHEVAL_SERVICE_URL}/dummyRecord/id`).timeout();
      const { body, status } = await getAgent()
        .get('/id')
        .set('cata-audit', '{"operatorId": 1234}')
        .send();
      expect(status).toEqual(500);
      expect(body).toEqual({});
    });
  });
});
