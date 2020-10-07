import React, { useState, useReducer, useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import firebase from './firebase';

import Routes from './Route/routes';
import styled from 'styled-components';

import {
  soupReducer,
  initialState,
  addAction,
  markAction,
  deleteAction
} from "./soup";

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
export const SoupsContext = React.createContext(null);


const App = () => {
  const [soupList, dispatch] = useReducer(soupReducer, initialState);

 
  return (
    <SoupsContext.Provider value={dispatch}>
    <StyledDiv>
      <GlobalStyle />
      <Routes/>
   </StyledDiv>
   </SoupsContext.Provider>
  );

}

export default App;
