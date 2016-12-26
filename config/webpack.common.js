const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const cssNext = require('postcss-cssnext');

const common = {
  entry: {
    app: './src/main.tsx'
  },

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js'
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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader/webpack',
          'awesome-typescript-loader'
        ]
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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          cssNext({
            browsers: ['last 1 version']
          })
        ]
      }
    })
  ],

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.css', '.html'],
    modules: ['node_modules']
  }
};

module.exports = common;