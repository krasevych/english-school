import React, {
  Component,
  PropTypes
} from 'react';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect } from 'redux-connect';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';

import routes from '../app/routes';
import { createSelectLocationState } from '../app/utils';

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    const history = syncHistoryWithStore(browserHistory, store, {
      selectLocationState: createSelectLocationState('routing')
    });

    return (
      <Provider store={store}>
        <Router
          render={props => <ReduxAsyncConnect {...props} />}
          history={history}
          routes={routes(store)}
        />
      </Provider>
    );
  }
}
