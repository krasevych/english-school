'use strict';
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');

const dev = {
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
          'postcss-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
};

module.exports = merge(common, dev);