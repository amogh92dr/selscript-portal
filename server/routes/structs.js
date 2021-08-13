'use strict';

// We need to be careful not to duplicate struct validations when we are talking to our own services
// We should only do basic sanity checks (if any) and let the service handle the deep inspection of parameters
// or reserve this for specific UI->server routes that are different from the server->service

const { superstruct } = require('superstruct');

// This file is where we define the schema and validation for all API calls
// See https://github.com/ianstormtaylor/superstruct/ for details

const struct = superstruct({
  types: {
    // Custom validators can be defined here
  },
});

const DummyQuery = struct({
  id: 'string',
});

module.exports = {
  DummyQuery,
};
