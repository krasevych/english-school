import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import reporter from 'postcss-reporter';
import cssNext from 'postcss-cssnext';

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
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
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
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.NoErrorsPlugin(),

    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          cssNext({
            browsers: ['last 1 version']
          }),
          reporter
        ]
      }
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html')
    })
  ],

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.css', '.html'],
    modules: ['node_modules']
  },

  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
  }
};

export default common;
