const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const common = {
  entry: {
    app: './src/main.tsx'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader',
        exclude: /(node_modules)/
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: 'tslint-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.tsx?$/,
        use: [
          'react-hot-loader/webpack',
          'awesome-typescript-loader'
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.html$/,
        exclude: /(\.test.ts$|node_modules)/,
        use: ['html-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        exclude: /(\.test.ts$|node_modules)/,
        use: ['file?name=assets/[name].[hash].[ext]']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.css', '.html', '.scss'],
    modules: ['node_modules']
  }
};

module.exports = common;