import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const Parent = ({ children }) => {
  console.log(111, children);
  return (
    <div>{children}</div>
  );
};

Parent.propTypes = {
  children: PropTypes.any
};

const Hello = ({ params }) => (
  <div>hello {params.id} </div>
);

Hello.propTypes = {
  params: PropTypes.object
};


export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { store } = this.props;
    console.log(111, store);

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
            <IndexRoute component={Hello} />
            <Route path="hello" component={Hello} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
