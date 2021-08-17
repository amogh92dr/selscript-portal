import React from 'react';
import PropTypes from 'prop-types';
import { logErrorBoundary } from '@catapulthealth/catapult-server-utils/consoleLogger';

import axios from 'lib/axios';
import log from 'lib/debug';

import classes from './ErrorBoundary.module.css';

const logError = logErrorBoundary(axios, log);

const displayError = error =>
  `SeleniumScript-Portalv1 Error (${process.env.VERSION})\n\n${error.toString()}`;

const ErrorBoundary = ({ error }) => {
  logError(error);
  return (
    <div>
      <h2>Oops! We&apos;ve encountered an unexpected error.</h2>
      <p>
        Sorry! Please let Tech Support know you&apos;ve encountered an error. Please copy the
        information below into an email and send it to{' '}
        <a href="mailto:techsupport@catapulthealth.com">techsupport@catapulthealth.com</a>.
        <br />
        Feel free to reload the application and try again.
      </p>
      <textarea
        className={classes.errorBox}
        value={displayError(error)}
        onFocus={e => e.target.select()}
      />
    </div>
  );
};

ErrorBoundary.propTypes = {
  error: PropTypes.node.isRequired,
};
export default ErrorBoundary;
