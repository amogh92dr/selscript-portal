import React from 'react';
import ReactDOM from 'react-dom';

import Router from 'components/Router';

import addErrorListener from 'lib/consoleErrors';

import './css/main.css';

ReactDOM.render(<Router />, document.getElementById('appRoot'));

addErrorListener();
