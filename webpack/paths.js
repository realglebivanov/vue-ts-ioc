const { resolve } = require('path');

module.exports = {
    configDir: resolve('webpack'),

    ts: {
        srcDir: resolve('src', 'ts'),
        buildDir: resolve('build')
    },

    root: (path) => resolve(path)
};
