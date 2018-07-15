const { resolve } = require('path');

module.exports = {
    configDir: resolve('webpack'),

    ts: {
        srcDir: resolve('src', 'ts'),
        buildDir: resolve('build')
    },

    spec: {
        srcDir: resolve('spec', 'ts'),
        buildDir: resolve('.tmp', 'spec'),
    },

    root: (path) => resolve(path)
};
