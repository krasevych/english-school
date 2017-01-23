import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';

const babelOptions = {
  plugins: [
    ['transform-decorators-legacy'],
    ['react-transform', {
      transforms: [{
        transform: 'react-transform-hmr',
        imports: ['react'],
        locals: ['module']
      }, {
        transform: 'react-transform-catch-errors',
        imports: ['react', 'redbox-react']
      }]
    }]
  ]
};

const dev = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
    'react-hot-loader/patch',
    './src/client'
  ],

  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'app.js',
    chunkFilename: '[name].js',
    publicPath: 'http://localhost:3001/static/'
    // publicPath: '/static/'
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: babelOptions
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
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true
    })
  ],
};

export default merge(common, dev);
