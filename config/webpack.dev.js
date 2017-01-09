import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';

const dev = {
  devtool: 'source-map',

  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/client'
  ],

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
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
          'postcss-loader',
          // TODO wait for fix https://github.com/andywer/webpack-blocks/issues/68
          /*{
           loader: 'postcss-loader',
           options: {
           plugins: () => [
           cssNext({
           browsers: ['last 1 version']
           }),
           reporter
           ],
           context: __dirname,
           postcss: [
           cssNext({
           browsers: ['last 1 version']
           }),
           reporter
           ]
           }
           }*/
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    })
  ]
};

export default merge(common, dev);
