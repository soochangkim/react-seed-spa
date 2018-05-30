const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ title, appMountId }) => ({
    plugins: [
        new HtmlWebpackPlugin({
            template: require('html-webpack-template'),
            title: title,
            appMountId: appMountId,
            inject: false
        })
    ]
});
