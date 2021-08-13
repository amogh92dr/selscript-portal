const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'app-constants$': path.resolve(__dirname, 'src/constants.js'),
      components: path.resolve(__dirname, 'src/components/'),
      lib: path.resolve(__dirname, 'src/lib/'),
      models: path.resolve(__dirname, 'src/models/'),
    },
    extensions: ['.js', '.jsx', '.css'],
  },
};
