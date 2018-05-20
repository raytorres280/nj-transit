const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'transit-server'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/transit-server-development',
    dialect: 'postgres'
  },

  test: {
    root: rootPath,
    app: {
      name: 'transit-server'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/transit-server-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'transit-server'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/transit-server-production'
  }
};

module.exports = config[env];
