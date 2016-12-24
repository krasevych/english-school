"use strict";
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dev = {
  output: {
    path: './dist',
    filename: '[name].js'
  },

  module: {
    rules: [

      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          notExtractLoader: 'style-loader',
          loader: [
            `css-loader?${JSON.stringify({
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            })}`,
            'postcss-loader'
          ]
        })
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin({filename: '[name].css', allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};

module.exports = merge(common, dev);