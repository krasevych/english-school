"use strict";
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');


const dev = {
  devtool: "source-map",

  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/main.tsx'
  ],

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: [
          'style-loader',
          `css-loader?${JSON.stringify({
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          })}`,
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};

module.exports = merge(common, dev);