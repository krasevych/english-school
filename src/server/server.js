import compression from 'compression';
import express from 'express';
import config from '../../config/webpack.dev';
import createSSR from './createSSR';

const isProd = process.env.NODE_ENV === 'production';
const app = express();

if (isProd) {
  app.use(compression());
  app.use('/static', express.static('dist'));
}

if (!isProd) {
  const webpack = require('webpack');
  const compiler = webpack(config);
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true,
    },
    noInfo: true
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', createSSR);

app.listen(3005, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3005/');
});
