import styled from 'styled-components';
import React, { Component } from 'react';
import { AppContainer } from '../containers';

const HomeWrapper = styled.section`
background: green;
color: ${props => (props.primary ? 'white' : 'palevioletred')};
`;

class Home extends Component {
  render() {
    return (<HomeWrapper>Home!</HomeWrapper>);
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
      }
    ]
  };
}
