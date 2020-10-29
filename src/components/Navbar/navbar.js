import React, { useContext } from 'react';
import HamburgerIcone from '../Icone/hamburgerIcone';
import styled from 'styled-components';
import SoupIcon from '../../components/Icone/soupIcon';
import { useHistory } from "react-router-dom";
import { useLocalStorage } from '../Hooks/UseLocalState';
import { CartContext } from '../Hooks/CartContext';




const HamburgerWrapper = styled.div`
margin-left:1.5rem;
position:absolute;
cursor: pointer;





`;

const SoupIconWrapper = styled.div`
display:${props => props.showCart ? 'flex' : 'none'};
margin-right:1.5rem;
cursor: pointer;
justify-content:center;
align-items:center;


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
color:#23591e;
font-size:1.8rem;
margin-right:0.5rem;
margin-top:0.5rem;

`;



const Navbar = (props) => {

  const [cart, setCart] = useContext(CartContext);

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
      
        <TotalSoup>{cart.length}</TotalSoup>  <SoupIcon/>
         </SoupIconWrapper>

        </NavbarWrapper>
           
        
        )
    }



export default Navbar;