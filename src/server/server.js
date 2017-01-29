import compression from 'compression';
import express from 'express';
import createSSR from './SSR/createSSR';
import appConfig from '../app/config';

const { host, port } = appConfig.server;
const app = express();
const isProd = process.env.NODE_ENV === 'production';

export default function (parameters) {
  if (isProd) {
    app.use(compression());
    app.use('/', express.static('src/build'));
  }

  app.get('*', createSSR(parameters.chunks()));

  app.listen(port, (err) => {
    if (err) {
      return console.error(err);
    }

    console.info(`Listening at ${host}:${port}`);
  });
}
