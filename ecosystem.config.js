module.exports = {
  apps: [
    {
      name: 'seleniumscript-portal',
      script: 'server/index.js',
      env_staging: {
        NODE_ENV: 'staging',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
