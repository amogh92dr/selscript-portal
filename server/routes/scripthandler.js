'use strict';

const router = require('@catapulthealth/catapult-server-utils').router();

const handleError = require('./handleError');
const { fetchAllRepos, executeTest, checkScriptCompletion } = require('../lib/scripthandler');
const { logger } = require('../lib/logger');

router.get('/', async (req, res) => {
  try {
    logger.info('Fetching all the Script names');
    const scriptlist = await fetchAllRepos();
    res.status(200).send(scriptlist);
  } catch (err) {
    // Sometimes we may want to return an empty result set instead of an error if records are not found in the service
    if (err.response && err.response.status && err.response.status === 404) {
      res.send([]);
      return;
    }
    // But we should always call the generic handleError() helper
    handleError(err, req, res);
  }
});
router.post('/:scriptName', async (req, res) => {
  const { scriptName } = req.params;
  const scriptDetail = req.body;
  try {
    logger.info(`Runing Selenium Script for ${scriptName}`);
    const pid = await executeTest(scriptName, scriptDetail);
    res.status(200).send({ pid });
  } catch (err) {
    // Sometimes we may want to return an empty result set instead of an error if records are not found in the service
    if (err.response && err.response.status && err.response.status === 404) {
      res.send([]);
      return;
    }
    // But we should always call the generic handleError() helper
    handleError(err, req, res);
  }
});
router.get('/status/:pid', async (req, res) => {
  const { pid } = req.params;
  try {
    logger.info(`Fetching Status for PID: ${pid}`);
    const processStatus = checkScriptCompletion(pid);
    res.status(200).send(processStatus);
  } catch (err) {
    // Sometimes we may want to return an empty result set instead of an error if records are not found in the service
    if (err.response && err.response.status && err.response.status === 404) {
      res.send([]);
      return;
    }
    // But we should always call the generic handleError() helper
    handleError(err, req, res);
  }
});

module.exports = router;
