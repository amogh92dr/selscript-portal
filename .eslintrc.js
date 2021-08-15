module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:jest/recommended', 'prettier', 'prettier/react'],
  plugins: ['import', 'jest', 'jsx-a11y', 'react', 'prettier'],
  env: {
    browser: true,
    'jest/globals': true,
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: './webpack.config.resolve.js',
      },
    },
  },
  root: true,
  rules: {
    'react/jsx-filename-extension': ['off'],
    strict: ['error', 'global'],
    'class-methods-use-this': ['off'],
    'jsx-a11y/no-autofocus': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'src/tests/**',
          'server/tests/**',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
        ],
        optionalDependencies: false,
      },
    ],
    'prettier/prettier': ['error'],
  },
  overrides: [
    {
      files: ['**/reducer.js'],
      rules: {
        'no-param-reassign': 'off',
        'default-case': 'off',
        'consistent-return': 'off',
      },
    },
  ],
};
