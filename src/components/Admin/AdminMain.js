import React, {useContext, useState } from 'react-dom';
import styled from 'styled-components';
import Firebase from '../../firebase';
import { AuthContext } from '../../Auth';
import HamburgerIcone from '../../components/Icone/hamburgerIcone';
import { withRouter } from 'react-router';

const MainWrapper = styled.div`
height:100%;
width:100%;

`;


const Navbar = styled.div`
top:0rem;
position:absolute;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:5rem;
background-color:#f2f3f5;
box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);

`;

const HamburgerDiv = styled.div`


`;


const Drawer = styled.div`
left:0rem;
top:0rem;
display: ${props => props.menuOpen ? 'block' : 'none'};
flex-direction:row;
background-color:#f2f3f5;

`;



const StyledATag = styled.a`
text-decoration:none;
color:#8b8b8b;
font-size:1rem;
padding-bottom:1rem;
margin-top:2rem;



`;


const DrawerContent = styled.div`
position:fixed;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
height:40rem;
background-color:#f2f3f5;
left:0rem;
top:0rem;
width:10rem;
padding-top:2.2rem;
text-align:center;
margin-top:5rem;
cursor: pointer;

`;


const BorderUnderline = styled.div`
width:100%;
height:0.1rem;
background-color:#dedede;
`;

const StyledH3 = styled.h3`
color:#23591e;
padding-right:1rem;
`;





const AdminMain = (props) => {


    const LogOut = () => {
        Firebase.logout();
        props.history.push('/AdminLogin');
    }

    const { currentUser } = useContext(AuthContext);


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openHandler = () => {

        if (!isMenuOpen) {
            setIsMenuOpen(true)

        } else {
            setIsMenuOpen(false)


        }
    }


if (currentUser != null) {
    return <MainWrapper>
        <Navbar><HamburgerDiv onClick={openHandler}><HamburgerIcone /></HamburgerDiv><StyledH3>{currentUser.email}</StyledH3></Navbar>


        <Drawer menuOpen={isMenuOpen}>
            <DrawerContent>


                <StyledATag>
                    <span>Lägg till soppa</span>
                </StyledATag>
                <BorderUnderline />

                <StyledATag onClick={() => LogOut()}>
                    <span>Logga ut</span>
                </StyledATag>
                <BorderUnderline />



            </DrawerContent>
        </Drawer>


    </MainWrapper>

        }
    }
        
        
export default withRouter(AdminMain);