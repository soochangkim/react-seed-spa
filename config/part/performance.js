module.exports = () => ({
    module: {
        rules: [
            {
                test: require.resolve('react'),
                loader: 'expose?React'
            }
        ]
    }
});
