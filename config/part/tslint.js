module.exports = () => ({
    module: {
        preLoaders: [
            {
                test: /\.tsx?$/,
                loader: 'tslint-loader',
                options: {}
            }
        ]
    }
});
