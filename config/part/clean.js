const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = ([ath]) => ({
    plugins: [
        new CleanWebpackPlugin([path], {
            root: process.cwd()
        })
    ]
});
