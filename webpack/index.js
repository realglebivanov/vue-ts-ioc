const { join } = require('path');

const webpackMerge = require('webpack-merge');
const paths = require('./paths.js');

const environment = process.env.NODE_ENV || 'development';

const commonConfigPath = join(paths.configDir, 'common');
const environmentConfigPath = join(paths.configDir, environment);

const commonConfig = require(commonConfigPath)(paths);
const environmentConfig = require(environmentConfigPath)(paths);

module.exports = webpackMerge(commonConfig, environmentConfig);
