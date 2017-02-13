import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div>
        <header>
          Links:
          {' '}
          <Link to="/home">Home</Link>
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
