const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = [
  {
    test: /\.tsx$/,
    use: ['react-hot-loader','ts-loader?jsx=true'],
    exclude: /(\.test.ts$|node_modules)/
  },
  {
    test: /\.ts$/,
    exclude: /(\.test.ts$|node_modules)/,
    use: ['awesome-typescript-loader']
  },
  {
    test: /\.html$/,
    use: ['html-loader']
  },
  {
    test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
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
    app: './src/main.ts'
  },

  resolve: {
    extensions: ['*', '.ts', '.js', '.css', '.html', '.scss']
  },

  module: {
    rules
  },

  plugins
};

module.exports = common;