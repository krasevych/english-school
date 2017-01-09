import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import React from 'react';

import Root from './root';
import configureStore from '../app/redux/store';

const renderApp = (App) => {
  const store = configureStore();

  render(
    <AppContainer>
      <App store={store} />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(Root);

if (module.hot) {
  module.hot.accept('./root', () => {
    const NextApp = require('./root');
    renderApp(NextApp);
  });
}
