import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import React from 'react';

import Root from './root';
import configureStore from '../app/redux/store';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
);

