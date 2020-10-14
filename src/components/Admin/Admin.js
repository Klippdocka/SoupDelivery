import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import Loggo from '../Icone/Loggo';
import { withRouter } from 'react-router';
import Firebase from '../../firebase';
import { AuthContext } from '../../Auth';
import HamburgerIcone from '../../components/Icone/hamburgerIcone';
import axios from '../../axios';
import theme from '../../theme';

const MainWrapper = styled.div`
height:100%;
width:100%;

`;

const StyledP = styled.p`
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

const SignOutBtn = styled.div`
height:2rem;
width:2rem;
border-radius:0.5rem;
`
    ;

const Drawer = styled.div`
left:0rem;
top:0rem;
display: ${props => props.menuOpen ? 'block' : 'none'};
flex-direction:row;
background-color:#f2f3f5;

`;


const StyledA = styled.a`
text-decoration:none;
color:#8b8b8b;
font-size:2rem;
margin-left:3rem;
padding-bottom:1rem;
padding-top:2rem;
margin-top:3rem;


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
height:30rem;
background-color:#f2f3f5;
left:0rem;
top:0rem;
width:7rem;
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

const SoupList = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:100%;

`;

const SoupWrapper = styled.div`
display:flex;
 justify-content:center;
 align-items:center;
 width:100%;
 


`;

const StyledH1 = styled.h1`
margin-top:2rem;
margin-left:6rem;
color:#23591e;
`;

const Sidebar = styled.div`
position:fixed;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
height:100%;
background-color:#f2f3f5;
left:0rem;
top:0rem;
width:7rem;
padding-top:2.2rem;
text-align:center;
`;

const ImgContainer = styled.div`
background-image: url(${props => props.image});
background-repeat: no-repeat;
background-size: cover;
width:70%;
height:10rem;
`;

const StyledH3 = styled.h3`
color:#23591e;
padding-right:1rem;
`;

const LogoContainer = styled.div`
display:flex;
align-items:center;
margin-bottom:2rem;
justify-content:center;
height:0.5rem;
width:100%;
padding-left:1rem;
`;


const MenuSoupContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:80%;
height:55rem;
max-width:60rem;
background-image: url(${props => props.image});
background-repeat: no-repeat;
background-size: cover;
box-shadow: 2px 2px 10px 5px rgba(0,0,0,0.11);
border-radius:1rem;
margin-top:2rem;
margin-bottom:4rem;


`;

const SoupMainContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:100%;

`;


const BtnAdd = styled.div`
position: static;
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:4rem;
background-color:#9ab54a;
color:white;
font-size:1.5rem;
box-shadow: 1px -2px 1px 0px rgba(0,0,0,0.15);
border-bottom-left-radius: 1rem;
border-bottom-right-radius: 1rem;



`;


const TitleContainer = styled.div`
position: static;
display:flex;
flex-direction:column;
justify-content:start;
align-items:start;
width:100%;
background-color:white;


`;


const Title = styled.h1`
color:#2f3030;
padding-top:1.5rem;
margin-block-start: 0em;
margin-block-end: 0em;
margin-left:3rem;
`;

const SoupDescription = styled.p`
width:20rem;
margin-left:3rem;
margin-block-start: 0em;
margin-block-end: 0em;
padding-top:1rem;
padding-bottom:1.5rem;
    
color:#2f3030;
`;

const ContentContainer = styled.div`
   margin-top:auto;
    width: 100%;
    
    
   

@media screen and (max-width: ${theme.screenSize.small}){
    width:100%;
}
`

const PriceContainer = styled.h2`
margin-top:0rem;
margin-left:3rem;
margin-bottom:2rem;
color:#2f3030;
`;





const Admin = (props) => {

    const [items, setItems] = useState([]);


    useEffect(() => {

        axios.getSoups()
            .then(response => {
                setItems(response.data);


            })

    }, []);


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

    { console.log(currentUser) }
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


            <SoupList>

                {items.map((element, index) => {
                    return (<SoupWrapper key={index} item={element} id={element.id} value={element.title} image={element.image}>
                        { /*
                    <StyledP>{element.title}</StyledP>
            <ImgContainer image={element.image}></ImgContainer>
            <StyledP>{element.description}</StyledP>
            <StyledP>{element.price} SEK</StyledP>
           </SoupWrapper> */}


                        <MenuSoupContainer image={element.image}>

                            <ContentContainer>
                                <TitleContainer>
                                    <Title>{element.title}</Title>
                                    <SoupDescription>{element.description}</SoupDescription>
                                    <PriceContainer>{element.price} kr</PriceContainer>

                                </TitleContainer>

                                <BtnAdd>Redigera</BtnAdd>
                            </ContentContainer>

                        </MenuSoupContainer>

                    </SoupWrapper>



                    );
                })}
            </SoupList>

        </MainWrapper>
    }
    return <MainWrapper>

    </MainWrapper>

}

export default withRouter(Admin);

