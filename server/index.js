'use strict';

require('dotenv').config();

const { app, catchallMiddleware } = require('./lib/server');
const { logger } = require('./lib/logger');
const configureDevServer = require('./lib/dev');

const scripthandler = require('./routes/scripthandler');

process.on('uncaughtException', err => {
  logger.fatal({ err }, 'Uncaught Exception Trapped');
});

app.use('/api/scripthandler', scripthandler);

// redirect trailing slashes
app.use((req, res, next) => {
  const test = /\?[^]*\//.test(req.url);
  if (req.url.substr(-1) === '/' && req.url.length > 1 && !test) {
    res.redirect(301, req.url.slice(0, -1));
  } else {
    next();
  }
});

app.use(catchallMiddleware);

if (process.env.NODE_ENV === 'development' && process.env.SEPARATE_UI_AND_SERVER !== 'true') {
  configureDevServer(app);
}
