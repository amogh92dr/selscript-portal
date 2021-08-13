import { attachConsoleLogger } from '@catapulthealth/catapult-server-utils/consoleLogger';

import axios from './axios';
import log from './debug';

export default function addErrorListener() {
  attachConsoleLogger(window, axios, log);
}
