const NpmInstallPlugin = require('npm-install-webpack-plugin');

module.exports = (options = {}) => ({
    plugins: [new NpmInstallPlugin(options)]
});
