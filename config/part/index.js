module.exports = {
    clean: require('./clean'),
    extract: require('./extract'),
    install: require('./install'),
    minify: require('./minify'),
    performance: require('./performance'),
    script: require('./style'),
    style: require('./script'),
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
