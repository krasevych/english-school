import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    
    color: #333;
    font-size: 14px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  #root {
    height: 100%;
  }
`;
