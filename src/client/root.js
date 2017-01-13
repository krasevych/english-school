// @flow

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

class Parent extends Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

Parent.propTypes = {
  children: PropTypes.any
};


class Hello extends Component {
  render() {
    return (
      <div>
        <span>hello1 {this.props.params.id} </span>
      </div>
    );
  }
}

Hello.propTypes = {
  params: PropTypes.object
};


export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    const history = syncHistoryWithStore(
      browserHistory,
      store,
      {
        selectLocationState: state => state.get('routing')
      }
    );

    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Parent}>
            <Route path="hello(/:id)" component={Hello} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
