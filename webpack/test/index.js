module.exports = (paths) => ({
    watch: false,
    target: 'node',
    devtool: 'inline-source-map',
    stats: 'minimal',

    context: paths.spec.srcDir,
    entry: { spec: './index' },

    output: {
        path: paths.spec.buildDir,
        filename: '[name].js'
    },

    module: {
        rules: [{
            test: [/\.ts$/],
            loader: 'ts-loader',
            include: [paths.spec.srcDir],
            options: { compilerOptions: { declaration: false } }
        }]
    }
});
