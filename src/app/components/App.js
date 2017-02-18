import styled from 'styled-components';
import { Link } from 'react-router';
import React, {
  PropTypes,
  Component
} from 'react';

const Wrapper = styled.div`
background: green;
color: #fff;
`;

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <Wrapper>
        <header>
          Links:
          {' '}
          <Link to="/home">Home</Link>
          {' '}
          <Link to="/foo">Foo</Link>
          {' '}
          <Link to="/test">Test</Link>
        </header>
        {this.props.children}
      </Wrapper>
    );
  }
}
