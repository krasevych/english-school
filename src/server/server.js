/* eslint-disable global-require, import/no-extraneous-dependencies */
import path from 'path';
import express from 'express';
import config from '../../config/webpack.dev';

const app = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: {
      colors: true,
    },
    noInfo: true
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.route('*')
  .get((req, res) =>
    res.sendFile(path.join(__dirname, '..', 'index.html')));

app.listen(3005, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3005/');
});
