// version for login
process.env.VERSION = 'jest-snapshot';

// global mocks
global.URLSearchParams = () => ({
  get: jest.fn(),
});
