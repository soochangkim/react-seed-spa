exports.reactPerformanceTool = () => ({
    module: {
        loaders: [
            {
                test: require.resolve('react'),
                loader: 'expose?React'
            }
        ]
    }
});
