const { LoaderOptionsPlugin } = require('webpack');
const WebpackTypingsAliasesPlugin = require('webpack-typings-aliases-plugin');

module.exports = (paths, env) => {
  const aliases = { '@': paths.ts.srcDir };

  return {
    context: paths.ts.srcDir,
    entry: { index: './index' },
    mode: env.mode,

    output: {
        path: paths.ts.buildDir,
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'VueTsIoc',
        globalObject: "typeof self !== 'undefined' ? self : this",
        umdNamedDefine: true
    },

    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.js'],
        alias: aliases
    },

    externals: ['ts-ioc-di', 'tslib', 'vue', 'vue-class-component'],

    module: {
      rules: [{
          test: /\.ts$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          include: [paths.ts.srcDir]
      }, {
          test: [/\.ts$/],
          loader: 'ts-loader',
          include: [paths.ts.srcDir],
          options: { compilerOptions: { declaration: env.is('production') } }
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
            tslint: { emitErrors: true, failOnHint: true, typeCheck: true, project: true }
          }
      })
    ]
  };
};
