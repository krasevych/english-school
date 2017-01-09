import { fromJS } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import createReducer from './reducer';

export default function configureStore(initialState = {}) {
  const reducer = createReducer();
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(browserHistory)
  ];

  const store = createStore(
    reducer,
    fromJS(initialState),
    applyMiddleware(...middlewares)
  );

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const createNextReducer = require('./reducer');
      const nextReducer = createNextReducer();

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
