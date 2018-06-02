const webpack = require('webpack');

module.exports = ({host, port, poll} = {}) =>{
    const ret = {
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            stats: 'errors-only',
            host: host, // Defaults to `localhost`
            port: port // Defaults to 8080
        },
        plugins: [
            // Enable multi-pass compilation for enhanced performance
            // in larger projects. Good default.
            new webpack.HotModuleReplacementPlugin({
                multiStep: true
            })
        ]
    };

    if (poll) {
        ret.watchOptions = {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,
            // Poll using interval (in ms, accepts boolean too)
            poll: 1000
        };
    }

    return ret;
};
