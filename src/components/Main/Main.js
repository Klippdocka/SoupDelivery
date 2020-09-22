import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import styled, { isStyledComponent } from 'styled-components';
import { useLocalState } from '../Hooks/UseLocalState';
import HamburgerIcone from '../Icone/hamburgerIcone';
import SoupIcon from '../../components/Icone/soupIcon';
import Drawer from '../Drawer/drawer';


const HamburgerWrapper = styled.div`
margin-left:1.5rem;
z-index:10;
cursor: pointer;

`;

const SoupIconWrapper = styled.div`
margin-right:1.5rem;
cursor: pointer;

`;

const NavbarWrapper = styled.div`
position:absolute;
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
height:6rem;
background:rgba(255,255,255,0.9);
`;

const TimeIconeWrapper = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
`;

const StyledP = styled.p`
font-size:1.5rem;
color:#242425;
margin-left:0.5rem;
`;




const DrawerWrapper = styled.div`
position:absolute;
justify-content:center;
flex-direction:column;
z-index:8;
width:25rem;
height:100%;
top:0rem;
left:0rem;
background-color:white;
cursor: pointer;

transition:all 2.6s ease;
display: ${props => props.menuOpen ? 'block' : 'none'};
`;


const DrawerContent = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:start;
margin-top:10rem;
-webkit-justify-content: start;
-webkit-align-items: start;


    
`;

const StyledA = styled.a`
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

const MainContainer = styled.div`
 width:100%;
 height:100%;`;



const Main = (props) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openHandler = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true)

        } else {
            setIsMenuOpen(false)


        }
    }


    return (

        <MainContainer>

            <Navbar click={openHandler} />

            <Drawer menuOpen={isMenuOpen}/>

            {props.children}

        </MainContainer>

    )

}


export default Main;