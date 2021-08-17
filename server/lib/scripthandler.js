'use strict';

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { logger } = require('./logger');
const {
  SELSCRIPT_PATH,
  MAX_CONCURRENT_SCRIPT,
  MAX_CONCURRENT_SCRIPT_COUNT,
} = require('../constants');
// Array to track Child Processes
const childProcessArray = [];

const fetchAllRepos = async () => {
  const files = await fs.promises.readdir(SELSCRIPT_PATH);
  const regex = new RegExp(
    '^.*.(py|PY|md|MD|DS_Store|git|gitignore|prettierrc|travis.yml|travis.YML|vscode)$|^.*-api$',
  );
  const scriptNameArray = files.filter(val => !val.match(regex));
  return scriptNameArray;
};

const checkScriptCompletion = pid => {
  const childObject = childProcessArray.find(item => item.pid === parseInt(pid, 10));
  // Remove Entries if child process is completed
  if (childObject && childObject.isComplete === true) {
    const index = childProcessArray.indexOf(childObject);
    childProcessArray.splice(index, 1);
  }
  return childObject;
};

const executeTest = async (scriptName, scriptDetail) => {
  if (childProcessArray.length > MAX_CONCURRENT_SCRIPT_COUNT) return MAX_CONCURRENT_SCRIPT;
  logger.info(scriptDetail);
  const child = spawn(
    `cd ${path.join(SELSCRIPT_PATH, scriptName)};
  \\yarn test:cbt --datafill --numreg=1`,
    {
      stdio: 'inherit',
      shell: true,
      detached: true,
    },
  );
  const childpid = child.pid;
  childProcessArray.push({
    pid: childpid,
    isComplete: false,
    exitStatus: 0,
  });

  child.on('exit', code => {
    const index = childProcessArray.indexOf(childProcessArray.find(item => item.pid === childpid));
    childProcessArray[index].isComplete = true;
    childProcessArray[index].exitStatus = code;
  });
  return childpid;
};

module.exports = {
  fetchAllRepos,
  executeTest,
  checkScriptCompletion,
};
