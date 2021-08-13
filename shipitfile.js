/* eslint-disable global-require, no-param-reassign, import/no-extraneous-dependencies */

module.exports = shipit => {
  require('shipit-deploy')(shipit);

  shipit.nvmRemote = (command, options, cb) => {
    const nvmAugmented = `source ${shipit.config.nvmPath} && ${command}`;
    return shipit.remote(nvmAugmented, options, cb);
  };

  shipit.initConfig({
    default: {
      workspace: '/tmp/seleniumscript-portal-git',
      deployTo: '/catapult/apps/seleniumscript-portal',
      repositoryUrl: 'git@github.com:catapulthealth/seleniumscript-portal.git',
      keepReleases: 3,
      shallowClone: true,
      buildScript: 'build',
      name: 'seleniumscript-portal',
      main: 'server/index.js',
      nvmPath: '/home/catapult/.nvm/nvm.sh',
    },
    staging: {
      servers: [
        {
          host: 'internal-apps.staging.or.aws.catapulthealth.com',
          user: 'catapult',
        },
      ],
      environment: 'staging',
      branch: 'develop',
    },
    prod: {
      servers: [
        {
          host: 'internal-apps.production.oh.aws.catapulthealth.com',
          user: 'catapult',
        },
      ],
      environment: 'production',
      branch: 'master',
    },
  });

  shipit.on('updated', () => {
    shipit.start('yarn');
  });

  shipit.blTask('yarn', () =>
    shipit
      .nvmRemote(`cd ${shipit.releasePath} && nvm use && yarn install --production=false`)
      .then(() => {
        shipit.emit('yarn_installed');
      }),
  );

  shipit.on('yarn_installed', () => {
    shipit.start('build');
  });

  shipit.blTask('build', () =>
    shipit.nvmRemote(
      `cd ${shipit.releasePath} && nvm use && yarn run ${shipit.config.buildScript}`,
    ),
  );

  shipit.on('published', () => {
    shipit.start('pm2-delete');
  });

  shipit.on('rollbacked', () => {
    shipit.start('pm2-delete');
  });

  shipit.blTask('pm2-delete', () =>
    shipit
      .nvmRemote(`cd ${shipit.releasePath} && nvm use && pm2 delete ${shipit.config.name} || true`)
      .then(() => {
        shipit.start('pm2-start');
      }),
  );

  shipit.blTask('pm2-start', () =>
    shipit.nvmRemote(
      `cd ${shipit.releasePath} && nvm use && pm2 startOrGracefulReload ecosystem.config.js --env ${shipit.config.environment} --cwd ${shipit.config.deployTo}/current && pm2 save`,
    ),
  );
};
