import React from 'react';
import styled from 'styled-components';
import CloseIcone  from '../Icone/CloseIcone';
import Logo from '../../components/Icone/Loggo';
import theme from '../../theme';
import { withRouter } from 'react-router';


const CloseBtnWrapper = styled.div`
display:flex;
justify-content:flex-end;
width:100%;
height:3rem;
`;


const CloseBtnContainer = styled.div`
display:flex;
justify-content:flex-end;
height:5rem;
width:5rem;
margin-top:1rem;
margin-right:1rem;



`;

const DrawerWrapper = styled.div`
display:flex;
position:fixed;
justify-content:center;
flex-direction:column;
width:28rem;
height:100%;
margin-top:${props => props.showCart ? '6' : '0'};
left:0rem;
background-color:white;
cursor: pointer;
box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.36);
transition:all 4s ease;
display: ${props => props.menuOpen ? 'block' : 'none'};
z-index:10;

`;


const DrawerContent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:start;
margin-top:5rem;
-webkit-justify-content: start;
-webkit-align-items: start;



@media screen and (max-width: ${theme.screenSize.small}){
  
  margin-top:0rem;
}

    
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

const LogoWrapper = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
margin-top:2rem;
`;

const LogoContainer = styled.div`
display:flex;
justify-content:center;



@media screen and (max-width: ${theme.screenSize.small}){
  margin-top:1rem;
  width:18rem;
  height:12rem;
}

`;

const Drawer = (props) => {



        return(

         
          <DrawerWrapper menuOpen={props.menuOpen} showCart={props.showCart}>
            
            <CloseBtnWrapper>
        <CloseBtnContainer onClick={props.menuClose}>
          <CloseIcone/>
          </CloseBtnContainer> 
          </CloseBtnWrapper>

          <LogoWrapper>
          <LogoContainer>
            <Logo/>
         </LogoContainer>
         </LogoWrapper>
          
            <DrawerContent>
           
            <StyledA href="/About">
                  <span>Om oss</span>
              </StyledA>
              <BorderUnderline/>

              <StyledA href="/villkor">
                  <span>Villkor</span>
              </StyledA>
              <BorderUnderline/>


              <StyledA href="/Contact">
                  <span>Hör av dig!</span>
              </StyledA>
              <BorderUnderline/>


           

            </DrawerContent>
            
           
          </DrawerWrapper>
          
          

        
        )
    }



export default withRouter(Drawer);
