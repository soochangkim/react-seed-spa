module.exports = () =>({
    module: {
        rules: [
            {
                test: /\.tsx$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: { /* Loader options go here */ }
                    }
                ]
            }
        ]
    }
});
