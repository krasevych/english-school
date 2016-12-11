"use strict";
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dev = {
  output: {
    path: './dist',
    filename: '[name].js'
  },
  plugins: [
    new ExtractTextPlugin('b.css')
  ]
};
module.exports = merge(common, dev);