const { join } = require('path');

const webpackMerge = require('webpack-merge');
const paths = require('./paths.js');
const Env = require('./env.js');

const environment = new Env(process.env.NODE_ENV || 'development');

const commonConfigPath = join(paths.configDir, 'common');
const environmentConfigPath = join(paths.configDir, environment.name);

const commonConfig = require(commonConfigPath)(paths, environment);
const environmentConfig = require(environmentConfigPath)(paths, environment);

module.exports = webpackMerge(commonConfig, environmentConfig);
