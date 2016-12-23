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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ]
};
module.exports = merge(common, dev);