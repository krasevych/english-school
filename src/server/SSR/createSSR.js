import React from 'react';
import { createMemoryHistory, match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { renderToString } from 'react-dom/server';
import Html from './html';
import routes from '../../app/routes';
import configureStore from '../../app/redux/store';
import { createSelectLocationState } from '../../app/utils';

export default function createSSR(assets) {
  return (req, res) => {
    const memoryHistory = createMemoryHistory(req.url);
    const store = configureStore(memoryHistory);
    const history = syncHistoryWithStore(memoryHistory, store, {
      selectLocationState: createSelectLocationState('routing')
    });
    match({ history, routes: routes(), location: req.url },
      (err, redirectLocation, renderProps) => {
        if (err) {
          res.status(500).send(err.message);
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
          const content = renderToString(<Html
            renderProps={renderProps}
            store={store}
            assets={assets}
          />);

          res.send(`<!doctype html>\n${content}`);
        }
      });
  };
}
