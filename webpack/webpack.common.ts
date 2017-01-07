const cssNext = require('postcss-cssnext');
const reporter = require('postcss-reporter');
const webpack = require('webpack');

import * as path from 'path';
// import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const common = {
    entry: {
        app: './src/main.tsx'
    },

    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name]_[hash].js'
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                use: 'url-loader?limit=10000'
            },
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                use: 'file-loader'
            },
        ]
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.NoErrorsPlugin(),

        new webpack.LoaderOptionsPlugin({
            options: {
                context: __dirname,
                postcss: [
                    cssNext({
                        browsers: ['last 1 version']
                    }),
                    reporter
                ]
            }
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html')
        })
    ],

    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js', '.css', '.html'],
        modules: ['node_modules']
    },

    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false
    }
};

module.exports = common;