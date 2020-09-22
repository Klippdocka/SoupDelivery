import React from 'react';
import styled, { isStyledComponent } from 'styled-components';
import {useLocalState} from '../Hooks/UseLocalState';
import theme from '../../theme';
import {MainWrapper} from '../Home/styledHome';



const NavbarContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:0rem;
width:100%;
`;

const StyledP = styled.p`
    font-size:2rem;
    z-index:8;
    color:#242425;


@media screen and (max-width: ${theme.screenSize.small}){
    font-size:1.8rem;
 

}
`;



const SoupMainContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:100%;
background-color:grey;
padding-top:1rem;

`;

const SoupContainer = styled.div`
display:flex;
width:90%;
height:90%;
background-color:green;
`;

const SoupMeny = () => {

    const [address, setAddress] = useLocalState('address');


return(


<MainWrapper>

<NavbarContainer>       
<StyledP>{address}</StyledP>
</NavbarContainer> 




<SoupMainContainer>
<SoupContainer>

</SoupContainer>
</SoupMainContainer>


</MainWrapper>


)

}

export default SoupMeny;