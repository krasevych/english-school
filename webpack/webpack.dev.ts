const common = require('./webpack.common');
const cssNext = require('postcss-cssnext');
const reporter = require('postcss-reporter');

import * as webpack from 'webpack';
import * as merge from 'webpack-merge';

const dev: webpack.Configuration = {
    devtool: 'source-map',

    entry: [
        'webpack-hot-middleware/client',
        'react-hot-loader/patch',
        './src/main.tsx'
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader/webpack',
                    'awesome-typescript-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    'postcss-loader',
                    // TODO wait for fix https://github.com/andywer/webpack-blocks/issues/68
                    /*{
                     loader: 'postcss-loader',
                     options: {
                     plugins: () => [
                     cssNext({
                     browsers: ['last 1 version']
                     }),
                     reporter
                     ],
                     context: __dirname,
                     postcss: [
                     cssNext({
                     browsers: ['last 1 version']
                     }),
                     reporter
                     ]
                     }
                     }*/
                ]
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            },
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true
        })
    ]
};
let a= {a:1, a:2};
let b = {...a,b:1, b:2};
console.log(111111,b);

export default merge(common, dev);