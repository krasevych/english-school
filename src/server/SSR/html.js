import React, { Component, PropTypes } from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import appConfig from '../../app/config';

export default class Html extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    renderProps: PropTypes.object.isRequired,
    assets: PropTypes.object.isRequired
  };

  render() {
    const { store, renderProps, assets } = this.props;
    const { isProd } = appConfig;
    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}`;
    const content = renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );

    return (
      <html lang="en">
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script dangerouslySetInnerHTML={{ __html: initialState }} />
          {isProd && <script src={assets.javascript.vendor} />}
          <script src={assets.javascript.main} />
        </body>
      </html>
    );
  }
}
