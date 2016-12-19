"use strict";
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./config/webpack.dev');

const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
  noInfo: true

}));

app.use(hotMiddleware(compiler));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'src', 'index.html')));

app.listen(3005, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3005/');
});