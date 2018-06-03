const merge = require('webpack-merge');
const path = require('path');
const parts = require('./config/part');

const TARGET = process.env.npm_lifecycle_event;
const ENABLE_POLLING = process.env.ENABLE_POLLING;
const PATHS = {
    app: path.join(__dirname, 'app'),
    dist: path.join(__dirname, 'dist'),
    test: path.join(__dirname, 'tests')
};
// process.env.BABEL_ENV = TARGET;
const common = merge(
    {
        entry: {
            app: PATHS.app
        },
        output: {
            path: PATHS.dist,
            filename: '[name].js',
            // TODO: Set publicPath to match your GitHub project name
            // E.g., '/kanban-demo/'. Webpack will alter asset paths
            // based on this. You can even use an absolute path here
            // or even point to a CDN.
            //publicPath: '',
            chunkFilename: '[name].js',
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor',
                        chunks: 'initial'
                    }
                }
            },
            runtimeChunk: {
                name: 'manifest'
            }
        }
    },
    parts.template({
        title: 'React App',
        appMountId: 'app'
    }),
    parts.script(),
    parts.tslint(),
    parts.style(),
    parts.clean(PATHS.dist)
);

var config;

switch (TARGET) {
    case 'start':
    case 'build':
    case 'stats':
        config = merge(
            common,
            {
                mode: 'production',
                devtool: 'source-map',
                // entry: {
                //     style: PATHS.style
                // },
                output: {
                    path: PATHS.dist,
                    filename: '[name].[chunkhash].js',
                    chunkFilename: '[chunkhash].js'
                }
            }
            // parts.clean(PATHS.dist),
        );
        break;
    // case 'test':
    // case 'test:tdd':
    //     config = merge(
    //         common,
    //         {
    //             devtool: 'inline-source-map',
    //             mode: 'development'
    //         },
    //         parts.loadIsparta(PATHS.app),
    //         parts.script(PATHS.test)
    //     );
    //     break;
    default:
        config = merge(
            common,
            {
                mode: 'development',
                devtool: 'eval-source-map'
                // entry: {
                //     // style: PATHS.style
                // }
            },
            // parts.style(PATHS.style),
            parts.server({
                // Customize host/port here if needed
                host: process.env.HOST,
                port: process.env.PORT,
                poll: ENABLE_POLLING
            }),
            // parts.performance()
        );
}

module.exports = config;

// module.exports = common;
// merge(
//     {
//         entry: './app/index.tsx',
//         output: {
//             filename: 'bundle.js'
//         },
//         resolve: {
//             // Add '.ts' and '.tsx' as a resolvable extension.
//             extensions: ['.ts', '.tsx', '.js']
//         },
//         module: {
//             rules: [
//                 {
//                     test: /\.ts|\.tsx$/,
//                     loader: 'awesome-typescript-loader'
//                 },
//                 {
//                     enforce: 'pre',
//                     test: /\.js$/,
//                     loader: 'source-map-loader'
//                 }
//             ]
//         }
//     },
//     parts.template({
//         title: 'React App',
//         appMountId: 'app'
//     })
// );
