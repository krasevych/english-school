import styled from 'styled-components';
import { asyncConnect } from 'redux-connect';
import React, {
  Component,
  PropTypes
} from 'react';

import AppContainer from '../containers/AppContainer';

const HomeWrapper = styled.section`
background: green;
color: ${props => (props.primary ? 'white' : 'palevioletred')};
`;

class Home extends Component {
  render() {
    return (<HomeWrapper>Home!</HomeWrapper>);
  }
}

@asyncConnect([{
  key: 'lunch',
  promise: () => Promise.resolve({ id: 1, name: 'Borsch' })
}])
class Test extends Component {
  static propTypes = {
    lunch: PropTypes.any
  };

  render() {
    const lunch = this.props.lunch;
    return (
      <div>{lunch.name}</div>
    );
  }
}

export default function routes() {
  return {
    path: '/',
    component: AppContainer,
    childRoutes: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/test',
        component: Test
      }
    ]
  };
}
