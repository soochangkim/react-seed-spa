const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    bundle :({ name, entry }) => ({
        entry: entry,
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: [name, 'manifest'],
                minChunks: Infinity
            })
        ]
    }),
    css: paths => ({
        module: {
            rules: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style', 'css', 'sass'),
                    include: paths
                }
            ]
        },
        plugins: [new ExtractTextPlugin('[name].[chunkhash].css')]
    })
}