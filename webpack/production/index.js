const webpack = require('webpack');
const {
  ModuleConcatenationPlugin,
  UglifyJsPlugin
} = webpack.optimize;

module.exports = (paths) => ({
    watch: false,

    devtool: '#source-map',

    plugins: [
        new ModuleConcatenationPlugin(),
        new UglifyJsPlugin({
            comments: false,
            compress: {warnings: false, drop_console: true, unsafe: true, dead_code: true}
        })
    ]
});
