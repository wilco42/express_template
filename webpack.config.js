var Webpack = require('webpack'),
    path = require('path'),
    buildPath = path.resolve(__dirname, 'public', 'build');

module.exports = {
    devtool: 'eval',

    entry: {
        app: './resources/js/app.js',
        two: './resources/js/page2.js'
    },

    output: {
        path: buildPath,
        filename: '[name].js',
        chunkFilename: '[chunkhash].js',
        publicPath: '/build/'
    },

    resolve: {
        alias: {
            jquery: path.resolve(__dirname, 'resources', 'js', 'vendor', 'jquery-1.11.3.min.js'),
            box: path.resolve(__dirname, 'resources', 'js', 'vendor', 't3.min.js')
        }
    },

    plugins: [
        new Webpack.ProvidePlugin({
            Box: 'box'
        }),
        new Webpack.optimize.CommonsChunkPlugin('common.js', ['app', 'two'])
    ],

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ],
        postLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules|public|jquery.*.js$|t3\.min\.js$/,
                loader: 'jshint-loader'
            }
        ]
    },
    jshint: {
        emitErrors: true,
        failOnHint: false
    }
};
