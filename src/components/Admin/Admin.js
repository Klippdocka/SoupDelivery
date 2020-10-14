import React, { useState, useContext, useEffect }from 'react';
import styled from 'styled-components';
import Loggo from '../Icone/Loggo';
import { withRouter } from 'react-router';
import Firebase from '../../firebase';
import { AuthContext } from '../../Auth';
import HamburgerIcone from '../../components/Icone/hamburgerIcone';
import axios from '../../axios';

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
justify-content:flex-end;
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
font-size:1rem;
padding-bottom:1rem;
margin-top:2rem;



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

const SoupList = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:7rem;

`;

const SoupWrapper = styled.div`
flex-direction:column;
margin-bottom:2rem;
background-color:#f5f5f5;
display:flex;
justify-content:center;
align-items:center;
width:20rem;
height:25rem;
margin-left:6rem;
padding:2rem 2rem 2rem 2rem;
box-shadow: 2px 1px 4px -1px rgba(0,0,0,0.06);

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
<Navbar>{/*<HamburgerDiv onClick={openHandler}><HamburgerIcone/></HamburgerDiv>*/}<StyledH3>{currentUser.email}</StyledH3></Navbar>
<Sidebar><LogoContainer><Loggo/></LogoContainer>


<StyledATag onClick={()=> LogOut()}>
                 <span>Logga ut</span>
             </StyledATag>
             <BorderUnderline/>
</Sidebar>
    {/*<Drawer menuOpen={isMenuOpen}>
    <DrawerContent>
           
           <StyledA href="/">
                 <span>Soppor</span>
             </StyledA>
             <BorderUnderline/>

             <StyledATag onClick={()=> LogOut()}>
                 <span>Logga ut</span>
             </StyledATag>
             <BorderUnderline/>



           </DrawerContent>
</Drawer>*/}


    <SoupList>
    
    {items.map((element, index) => {
            return (<SoupWrapper key={index} item={element} id={element.id} value={element.title} image={element.image}>
                    <StyledP>{element.title}</StyledP>
            <ImgContainer image={element.image}></ImgContainer>
            <StyledP>{element.description}</StyledP>
            <StyledP>{element.price} SEK</StyledP>
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

