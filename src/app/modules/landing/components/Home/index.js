import React, {
  PropTypes,
  PureComponent
} from 'react';
import Wrapper from './Wrapper';

export default class Home extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <Wrapper>
        <h1>Home</h1>
      </Wrapper>
    );
  }
}
