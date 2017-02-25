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
    font-size: 14px
  }
  
  #root {
    height: 100%;
  }
`;
