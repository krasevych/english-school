import Express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.client.development';

const WEBPACK_DEV_SERVER_PORT = process.env.PORT || 3001;

const app = new Express();
const compiler = webpack(config);

const options = {
  quiet: true,
  noInfo: true,
  hot: true,
  publicPath: config.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true }
};

app.use(webpackDevMiddleware(compiler, options));
app.use(webpackHotMiddleware(compiler));

app.listen(WEBPACK_DEV_SERVER_PORT, (error) => {
  if (error) {
    console.error(error.stack || error);
    throw error;
  }

  console.info('Webpack development server listening on port %s', WEBPACK_DEV_SERVER_PORT);
});
