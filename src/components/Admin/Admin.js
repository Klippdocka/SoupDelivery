import React, { useState, useContext }from 'react';
import styled from 'styled-components';
import Loggo from '../Icone/Loggo';
import { withRouter } from 'react-router';
import Firebase from '../../firebase';
import { AuthContext } from '../../Auth';
import HamburgerIcone from '../../components/Icone/hamburgerIcone';

const MainWrapper = styled.div`
height:100%;
width:100%;
`;

const StyledP = styled.p`
`;

const Navbar = styled.div`
top:0rem;
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:5rem;
background-color:#f2f3f5;
box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);

`;

const HamburgerDiv = styled.div`
height:3rem;
width:3rem;

`;

const SignOutBtn = styled.div`
height:2rem;
width:2rem;
border-radius:0.5rem;
`
;

const Drawer = styled.div`
left:0rem;
width:20rem;
height:50rem;
display: ${props => props.menuOpen ? 'block' : 'none'};
flex-direction:row;
background-color:#f2f3f5;
`;


const StyledA =styled.a`
text-decoration:none;
color:#8b8b8b;
font-size:2rem;
margin-left:3rem;
padding-bottom:1rem;
padding-top:2rem;
margin-top:3rem;


`;


const StyledATag =styled.a`
text-decoration:none;
color:#8b8b8b;
font-size:2rem;
margin-left:3rem;
padding-bottom:1rem;
padding-top:10rem;



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
`;


const BorderUnderline = styled.div`
width:100%;
height:0.1rem;
background-color:#dedede;
`;



const Admin = (props) => {


const {currentUser} = useContext(AuthContext);


const [isMenuOpen, setIsMenuOpen] = useState(false);

const openHandler = () => {

    if (!isMenuOpen) {
        setIsMenuOpen(true)

    } else {
        setIsMenuOpen(false)


    }
}

{console.log(currentUser)}
if(currentUser !=null) {
    return <MainWrapper> 
<Navbar><HamburgerDiv onClick={openHandler}><HamburgerIcone/></HamburgerDiv><StyledP>{currentUser.email}</StyledP></Navbar>
    <Drawer menuOpen={isMenuOpen}>
    <DrawerContent>
           
           <StyledA href="/">
                 <span>Soppor</span>
             </StyledA>
             <BorderUnderline/>

             <StyledATag href="/">
                 <span>Logga ut</span>
             </StyledATag>
             <BorderUnderline/>



           </DrawerContent>
    </Drawer>
    </MainWrapper>
}
return <MainWrapper>

</MainWrapper>

}

export default withRouter(Admin);

