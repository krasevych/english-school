const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = [
  {
    test: /\.tsx?$/,
    use: ['awesome-typescript-loader'],
    // use: ['react-hot-loader','ts-loader?jsx=true'],
    exclude: /(\.test.ts$|node_modules)/
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
    app: './src/main.tsx'
  },

  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.css', '.html', '.scss']
  },

  module: {
    rules
  },

  plugins,
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};

module.exports = common;