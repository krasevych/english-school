import React, { PropTypes } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      Links:
      {' '}
      <Link to="/">Home</Link>
      {' '}
      <Link to="/foo">Foo</Link>
      {' '}
      <Link to="/bar">Bar34343</Link>
    </header>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.any
};

const Home = () => (<div>Home!</div>);
const Foo = () => (<div>Foo111!</div>);
const Bar = () => (<div>Bar!</div>);

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="foo" component={Foo} />
    <Route path="bar" component={Bar} />
  </Route>
);

export default routes;
