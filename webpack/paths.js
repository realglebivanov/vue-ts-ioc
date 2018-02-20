const { resolve } = require('path');

module.exports = {
    configDir: resolve('webpack'),

    ts: {
        srcDir: resolve('src', 'ts'),
        buildDir: resolve('build'),
        specDir: resolve('spec', 'ts')
    },

    root: (path) => resolve(path)
};
