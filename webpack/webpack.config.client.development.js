import webpack from 'webpack';
import merge from 'webpack-merge';
import getBaseConfig from './webpack.config.client';

const baseConfig = getBaseConfig({
  development: true,
  css_bundle: true
});

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

const config = {
  devtool: 'inline-eval-cheap-source-map',
  performance: { hints: false },

  entry: {
    main: [
      'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr',
      'react-hot-loader/patch',
      baseConfig.entry.main
    ]
  },

  output: {
    publicPath: `http://localhost:3001${baseConfig.output.publicPath}`
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: babelOptions
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
  ]
};

export default merge(baseConfig, config);
