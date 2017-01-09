import { fromJS } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import createReducer from './reducer';

export default function configureStore(initialState = {}) {
  const middlewares = [
    thunkMiddleware,
    routerMiddleware(browserHistory)
  ];

  return createStore(
    createReducer(),
    fromJS(initialState),
    applyMiddleware(...middlewares)
  );
}
