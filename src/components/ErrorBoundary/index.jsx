import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { logErrorBoundary } from '@catapulthealth/catapult-server-utils/consoleLogger';

import axios from 'lib/axios';
import log from 'lib/debug';

import './styles.css';

const logError = logErrorBoundary(axios, log);

const displayError = error =>
  `SeleniumScript-Portalv1 Error (${process.env.VERSION})\n\n${error.toString()}`;

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
  }

  render() {
    const { error, info } = this.state;
    const { children } = this.props;

    if (error) {
      logError(error, info ? info.componentStack : 'unknown');
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
            styleName="errorBox"
            value={displayError(error)}
            onFocus={e => e.target.select()}
          />
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
