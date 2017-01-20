import { combineReducers } from 'redux-immutablejs';
import routeReducer from './routing';

export default function createReducer() {
  return combineReducers({
    routing: routeReducer
  });
}
