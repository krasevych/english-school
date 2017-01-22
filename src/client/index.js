import React from 'react';
import { fromJS } from 'immutable';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';

import Root from './root';
import configureStore from '../app/redux/store';

const initialState = fromJS(window.__INITIAL_STATE__);
const store = configureStore(browserHistory, initialState);

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
);

