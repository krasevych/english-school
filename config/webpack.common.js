const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const rules = [
  {
    test: /\.tsx?$/,
    use: ['babel-loader', 'awesome-typescript-loader'],

    // include: path.join(__dirname, 'src')
    // use: ['react-hot-loader','ts-loader?jsx=true']
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
];

const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  })
];

const common = {
  entry: {
    app: './src/main.tsx'
  },

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.css', '.html', '.scss'],
    modules:['node_modules']
  },

  module: {
    rules
  },

  plugins
};

module.exports = common;