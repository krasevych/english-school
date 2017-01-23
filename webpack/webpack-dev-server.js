import Express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../config/webpack.dev';

const WEBPACK_DEV_SERVER_PORT = process.env.PORT;

const app = new Express();
const compiler = webpack(config);

const options = {
  quiet: true, // don’t output anything to the console
  noInfo: true, // suppress boring information
  hot: true, // adds the HotModuleReplacementPlugin and switch the server to hot mode. Note: make sure you don’t add HotModuleReplacementPlugin twice
  inline: true, // also adds the webpack/hot/dev-server entry

  // You can use it in two modes:
  // watch mode (default): The compiler recompiles on file change.
  // lazy mode: The compiler compiles on every request to the entry point.
  lazy: false,

  // network path for static files: fetch all statics from webpack development server
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
