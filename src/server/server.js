import compression from 'compression';
import express from 'express';
import createSSR from './createSSR';

const isProd = process.env.NODE_ENV === 'production';
const app = express();

if (isProd) {
  app.use(compression());
  app.use('/static', express.static('dist'));
}

app.get('*', createSSR);

app.listen(3005, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3005/');
});
