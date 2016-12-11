const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const loaders = [
  {
    test: /\.ts$/,
    loader: 'ts'
  },
  {
    test: /\.html$/,
    loader: 'file!html'
  },
  {
    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
    loader: 'file?name=assets/[name].[hash].[ext]'
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
  }
];

const plugins = [
  new HtmlWebpackPlugin({
    fileName: './src/index.html'
  })
];

const common = {
  entry: {
    app: './src/main.ts'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.css']
  },
  module: {
    loaders
  },
  plugins
};

module.exports = common;