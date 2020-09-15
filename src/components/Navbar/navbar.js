import React from 'react';
import HamburgerIcone from '../Icone/hamburgerIcone';
import styled from 'styled-components';
import SoupIcon from '../../components/Icone/soupIcon';
import TimeIcone from '../../components/Icone/time';
import TimeIcon from '../../components/Icone/time';


const HamburgerWrapper = styled.div`
margin-left:1.5rem;
z-index:10;

`;

const SoupIconWrapper = styled.div`
margin-right:1.5rem;

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

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handler()
    }

    render() {
        return(
            <NavbarWrapper>

        <HamburgerWrapper onClick={this.handleClick}>
        
             <HamburgerIcone/>   
        </HamburgerWrapper>

        
        <TimeIconeWrapper><TimeIcon/>
            <StyledP>15-20 min</StyledP>
          </TimeIconeWrapper>
           
        <SoupIconWrapper>
                 <SoupIcon/>
         </SoupIconWrapper>

        </NavbarWrapper>
           
        
        )
    }

}

export default Navbar;