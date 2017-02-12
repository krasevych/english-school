import React, { PropTypes, Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

@connect(null, { pushState: push })
class App extends Component {
  render() {
    const f = () => {
      console.log(this.props.pushState);
      this.props.pushState('/foo');
    };
    return (
      <div>
        <div onClick={() => f()}>asda
        </div>

        <header>
          Links:
          {' '}
          <Link to="/">Home</Link>
          {' '}
          <Link to="/foo">Foo</Link>
          {' '}
          <Link to="/bar">Bar</Link>
        </header>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.any,
  pushState: PropTypes.any
};

const HomeWrapper = styled.section`
background: red;
`;

class Home extends Component {
  render() {
    return (<HomeWrapper>Home!</HomeWrapper>);
  }
}

class Foo extends Component {
  render() {
    return (<div>Foo!</div>);
  }
}

class Bar extends Component {
  render() {
    return (<div>Bar!</div>);
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="foo" component={Foo} />
    <Route path="bar" component={Bar} />
  </Route>
);

export default routes;
