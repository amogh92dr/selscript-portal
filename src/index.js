import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import addErrorListener from 'lib/consoleErrors';
import store from './store';
import App from './App';

import './css/main.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('appRoot'),
);

addErrorListener();
