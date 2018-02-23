const { LoaderOptionsPlugin } = require('webpack');
const WebpackTypingsAliasesPlugin = require('webpack-typings-aliases-plugin');

module.exports = (paths) => {
    const aliases = { '@': paths.ts.srcDir };

    return {
        context: paths.ts.srcDir,
        entry: { index: './index' },

        output: {
            path: paths.ts.buildDir,
            publicPath: paths.ts.buildPath,
            filename: '[name].js',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },

        resolve: {
            modules: ['node_modules'],
            extensions: ['.ts', '.js'],
            alias: aliases
        },

        externals: [
            'vue',
            'vue-class-component',
            'ts-ioc-di'
        ],

        module: {
          rules: [{
              test: /\.ts$/,
              enforce: 'pre',
              loader: 'tslint-loader',
              include: [paths.ts.srcDir]
          }, {
              test: [/\.ts$/],
              loader: 'ts-loader',
              include: [paths.ts.srcDir]
          }]
        },

        plugins: [
          new WebpackTypingsAliasesPlugin({
            aliases: aliases,
            srcDir: paths.ts.srcDir,
            buildDir: paths.ts.buildDir
          }),
          new LoaderOptionsPlugin({
              options: {
                tslint: {emitErrors: true, failOnHint: true, typeCheck: true, project: true}
              }
          })
        ]
    };
};
