import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Routes from './Route/routes';
import styled from 'styled-components';
import { AuthProvider } from '../src/Auth';

import { CartProvider } from './components/Hooks/CartContext';

const StyledDiv = styled.div`
height:100%;
width:100%;

`

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    width:100%;
    height:100%;
  

  }

  body{
    width:100%;
    height:100%;
    padding:0;
    margin:0;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  #root{
    height:100%;
  }

 
`


const App = () => {
 
  return (
    <CartProvider>
    <AuthProvider>
    
    <StyledDiv>
      <GlobalStyle />
      <Routes/>
   </StyledDiv>

   </AuthProvider>
   </CartProvider>
  );

}

export default App;
