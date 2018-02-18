module.exports = (paths) => ({
    devtool: '#eval',
    watch: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 500
    }
});
