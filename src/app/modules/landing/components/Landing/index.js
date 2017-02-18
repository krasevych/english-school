import React, {
  PropTypes,
  PureComponent
} from 'react';
import Wrapper from './Wrapper';

export default class Landing extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <Wrapper>
        {children}
      </Wrapper>
    );
  }
}
