import React from 'react';
import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { renderToString } from 'react-dom/server';

import Html from './html';
import routes from '../app/routes';
import configureStore from '../app/redux/store';


export default function createSSR(req, res) {
  const memoryHistory = createMemoryHistory(req.url);
  const store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store, {
    selectLocationState: state => state.get('routing')
  });

  match({ history, routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      res.send(`<!doctype html>\n${renderToString(<Html renderProps={renderProps} store={store} />)}`);
    }
  });
}
