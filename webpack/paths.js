const { resolve } = require('path');

module.exports = {
    configDir: resolve('webpack'),

    ts: {
        srcDir: resolve('src', 'ts'),
        buildDir: resolve('build'),
        specDir: resolve('spec', 'ts')
    },

    spec: {
        srcDir: resolve('spec', 'ts'),
        buildDir: resolve('.tmp', 'spec'),
    },

    root: (path) => resolve(path)
};
