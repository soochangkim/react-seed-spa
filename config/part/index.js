const extract = require('./extract');

module.exports = {
    clean: require('./clean'),
    extract: require('./extract'),
    install: require('./install'),
    minify: require('./minify'),
    performance: require('./performance'),
    script: require('./script'),
    style: require('./style'),
    template: require('./template'),
    tslint: require('./tslint'),
    server: require('./server')
};

// exports.setFreeVariable = function(key, value) {
//     const env = {};
//     env[key] = JSON.stringify(value);

//     return {
//       plugins: [
//         new webpack.DefinePlugin(env)
//       ]
//     };
//   }
