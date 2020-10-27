import React, { useState } from 'react';
import HamburgerIcone from '../Icone/hamburgerIcone';
import styled from 'styled-components';
import SoupIcon from '../../components/Icone/soupIcon';
import CloseIcone  from '../Icone/CloseIcone';
import { useHistory } from "react-router-dom";

const HamburgerWrapper = styled.div`
margin-left:1.5rem;
position:absolute;
cursor: pointer;




`;

const SoupIconWrapper = styled.div`
display:${props => props.showCart ? 'flex' : 'none'};
margin-right:1.5rem;
cursor: pointer;


`;

const NavbarWrapper = styled.div`
position:fixed;
display:flex;
top:0rem;
align-items:center;
justify-content:space-between;
width:100%;
height:6rem;

background:${props => props.showCart ? 'rgba(255,255,255,0.98);' : 'none'};
box-shadow:${props => props.showCart ? '2px 3px 1px 0px rgba(0,0,0,0.06)' : 'none'}; 
 
`;

const TimeIconeWrapper = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`;

const StyledP = styled.p`
position:fixed;
font-size:1.5rem;
color:#242425;
margin-left:0.5rem;
`;


const TotalSoup = styled.h3`
color:#b7b7b7;
font-size:1.8rem;


`;



const Navbar = (props) => {

  const [counter, setCounter] = useState(0);

  let history = useHistory();

const HandleChange = () => {

  history.push('/ShoppingCart')

}

        return(
            <NavbarWrapper showCart={props.showCart}>

        <HamburgerWrapper onClick={props.click}>
        
             <HamburgerIcone/>   
        </HamburgerWrapper>

        
      <TimeIconeWrapper>
      
     <StyledP>{}</StyledP>
      </TimeIconeWrapper>
           
        <SoupIconWrapper onClick={HandleChange} showCart={props.showCart}>
        <TotalSoup>{counter}</TotalSoup>  <SoupIcon/>
         </SoupIconWrapper>

        </NavbarWrapper>
           
        
        )
    }



export default Navbar;