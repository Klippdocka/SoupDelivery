import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Routes from './Route/routes';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    width:100%;
    height:100%;
  }

  body {
    margin:0;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes/>
   </div>
  );

}

export default App;
