import React, { useState } from 'react';
import Navbar from '../Navbar/navbar';
import styled from 'styled-components';
import { useLocalState } from '../Hooks/UseLocalState';
import HamburgerIcone from '../Icone/hamburgerIcone';
import SoupIcon from '../../components/Icone/soupIcon';
import Drawer from '../Drawer/drawer';




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

    const closeHandler = () => { setIsMenuOpen(false);

    }


  

    return (

        <MainContainer>

            <Navbar  click={openHandler} showCart={props.showCart}/>

            <Drawer menuClose={closeHandler} menuOpen={isMenuOpen} showCart={props.showCart} />

            {props.children}

        </MainContainer>

    )

}


export default Main;