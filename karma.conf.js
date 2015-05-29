var Webpack = require('webpack'),
    path = require('path');

module.exports = function(config) {
    config.set({
        frameworks: [
            'mocha',
            'chai',
            'sinon'
        ],

        files: [
            'tests/*_test.js',
            'tests/**/*_test.js'
        ],

        exclude: [
            'resources/js/jquery*.js',
            'resources/js/t3.min.js'
        ],

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: [
            'PhantomJS'
        ],

        preprocessors: {
            'tests/*_test.js': ['webpack'],
            'tests/**/*_test.js': ['webpack']
        },

        reporters: [
            'progress',
            'coverage'
        ],

        coverageReporter: {
            dir: 'build/reports/coverage',
            reporters: [
                {
                    type: 'html',
                    subdir: 'report-html'
                },
                {
                    type: 'text',
                    file: 'text.txt'
                },
                {
                    type: 'lcov',
                    subdir: 'report-lcov'
                },
                {
                    type: 'cobertura',
                    subdir: '.',
                    file: 'cobertura.txt'
                }
            ]
        },

        webpack: {
            module: {
                postLoaders: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|resources\/js\/vendor)/,
                        loader: 'istanbul-instrumenter'
                    }
                ]
            },
            resolve: {
                alias: {
                    jquery: path.resolve('../app', 'resources', 'js', 'vendor', 'jquery-1.11.3.min.js'),
                    box: path.resolve('../app', 'resources', 'js', 'vendor', 't3-testing.js')
                }
            },

            plugins: [
                new Webpack.ProvidePlugin({
                    Box: 'box'
                })
            ]
        },

        webpackMiddleware: {
            noInfo: true
        },

        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ]

    });
};
