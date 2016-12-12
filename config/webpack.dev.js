"use strict";
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');

const dev = {
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
module.exports = merge(common, dev);