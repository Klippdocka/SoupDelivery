import React from 'react';
import styled from 'styled-components';



const DrawerWrapper = styled.div`
position:fixed;
justify-content:center;
flex-direction:column;
z-index:9;
width:26rem;
height:100%;
top:0rem;
left:0rem;
background-color:white;
cursor: pointer;

transition:all 4s ease;
display: ${props => props.menuOpen ? 'block' : 'none'};
`;


const DrawerContent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:start;
margin-top:7rem;
-webkit-justify-content: start;
-webkit-align-items: start;


    
`;

const StyledA =styled.a`
text-decoration:none;
color:#8b8b8b;
font-size:2rem;
margin-left:3rem;
padding-bottom:1rem;
padding-top:2rem;


`

const BorderUnderline = styled.div`
width:100%;
height:0.1rem;
background-color:#dedede;
`;

const Drawer = (props) => {

        return(

         
          <DrawerWrapper menuOpen={props.menuOpen}>

            <DrawerContent>
            <StyledA href="/">
                  <span>Om oss</span>
              </StyledA>
              <BorderUnderline/>

              <StyledA href="/">
                  <span>Villkor</span>
              </StyledA>
              <BorderUnderline/>


              <StyledA href="/">
                  <span>Hör av dig!</span>
              </StyledA>
              <BorderUnderline/>


              <StyledA href="/">
                  <span>Dela och få rabatt</span>
              </StyledA>
           

            </DrawerContent>
            
           
          </DrawerWrapper>
          
          

        
        )
    }



export default Drawer;
