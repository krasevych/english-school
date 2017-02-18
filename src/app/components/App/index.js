import React, {
  PropTypes,
  PureComponent
} from 'react';
import Wrapper from './Wrapper';

export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}
