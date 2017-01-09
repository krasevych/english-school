import path from 'path';
import express from 'express';
import config from '../../config/webpack.dev';

const app = express();

if (process.env.NODE_ENV === 'development') {
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

  const fs = middleware.fileSystem;

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(file.toString());
      }
    });
  });
}

app.listen(3005, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3005/');
});
