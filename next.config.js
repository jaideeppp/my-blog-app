const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'jaideep',
        mongodb_password: 'jaideep123',
        mongodb_clustername: 'my-blog',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'jaideep',
      mongodb_password: 'jaideep123',
      mongodb_clustername: 'my-blog',
      mongodb_database: 'my-site',
    },
  };
};
