import path from 'path';
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const vendor = [
  'react',
  'react-dom',
  'redux',
  'react-redux',
  'redux-thunk',
  'immutable',
  'redux-immutablejs',
  'react-router',
  'react-router-redux',
  // 'react-helmet'
];

const prod = {
  entry: {
    main: './src/client',
    vendor
  },

  output: {
    filename: '[name]_[chunkhash].js',
    chunkFilename: '[name]_[chunkhash].js',
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/static/'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'postcss-loader'
          ]
        })
      },
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),

    new ExtractTextPlugin({
      filename: '[name]_[hash].css'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};

export default merge(common, prod);
