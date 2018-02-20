const { LoaderOptionsPlugin } = require('webpack');

module.exports = (paths) => ({
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
        alias: { '@': paths.ts.srcDir }
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
      }, {
          test: [/\.js$/],
          loader: 'babel-loader',
          include: [paths.root('node_modules')]
      }]
    },

    plugins: [
      new LoaderOptionsPlugin({
          options: {
            tslint: {emitErrors: true, failOnHint: true, typeCheck: true, project: true}
          }
      })
    ]
});
