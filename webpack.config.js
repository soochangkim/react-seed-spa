const merge = require('webpack-merge');
const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const part = require('./config/part');

const TARGET = process.env.npm_lifecycle_event;
const ENABLE_POLLING = process.env.ENABLE_POLLING;
const PATHS = {
    src: path.join(__dirname, 'src'),
    dist: path.join(__dirname, 'dist'),
    test: path.join(__dirname, 'tests')
};

process.env.BABEL_ENV = TARGET;

const common = merge({
    entry: PATHS.src,
    output: {
        path: PATHS.dist,
        filename: '[name].js'
                    // TODO: Set publicPath to match your GitHub project name
            // E.g., '/kanban-demo/'. Webpack will alter asset paths
            // based on this. You can even use an absolute path here
            // or even point to a CDN.
            //publicPath: ''
    }
});


// const common = merge(
//     {
//         entry: {
//             app: PATHS.app
//         },
//         output: {
//             path: PATHS.dist,
//             filename: '[name].js'

//         },
        
//         plugins: [new HardSourceWebpackPlugin()]
//     },
//     parts.indexTemplate({
//         title: 'react app template',
//         appMountId: 'src'
//     }),
//     parts.loadJSX(PATHS.app),
//     parts.lintJSX(PATHS.app)
// );

// var config;

// // Detect how npm is run and branch based on that
// switch (TARGET) {
//     case 'build':
//     case 'stats':
//         config = merge(
//             common,
//             {
//                 devtool: 'source-map',
//                 entry: {
//                     style: PATHS.style
//                 },
//                 output: {
//                     path: PATHS.build,
//                     filename: '[name].[chunkhash].js',
//                     chunkFilename: '[chunkhash].js'
//                 }
//             },
//             parts.clean(PATHS.build),
//             parts.setFreeVariable('process.env.NODE_ENV', 'production'),
//             parts.extractBundle({
//                 name: 'vendor',
//                 entries: ['react', 'react-dom']
//             }),
//             parts.minify(),
//             parts.extractCSS(PATHS.style)
//         );
//         break;
//     case 'test':
//     case 'test:tdd':
//         config = merge(
//             common,
//             {
//                 devtool: 'inline-source-map'
//             },
//             parts.loadIsparta(PATHS.app),
//             parts.loadJSX(PATHS.test)
//         );
//         break;
//     default:
//         config = merge(
//             common,
//             {
//                 devtool: 'eval-source-map',
//                 entry: {
//                     style: PATHS.style
//                 }
//             },
//             parts.setupCSS(PATHS.style),
//             parts.devServer({
//                 // Customize host/port here if needed
//                 host: process.env.HOST,
//                 port: process.env.PORT,
//                 poll: ENABLE_POLLING
//             }),
//             parts.enableReactPerformanceTools(),
//             parts.npmInstall()
//         );
// }

// module.exports = config;
