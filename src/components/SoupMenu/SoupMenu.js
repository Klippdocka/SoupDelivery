import React, {useState} from 'react';
import styled, { isStyledComponent } from 'styled-components';
import {useLocalState} from '../Hooks/UseLocalState';
import theme from '../../theme';
import {MainWrapper} from '../Home/styledHome';
import Soup from '../Soup/Soup';
import Soup4 from '../Images/Soup4.jpg';
import Soup5 from '../Images/Soup5.jpg';
import Soup3 from '../Images/Soup3.jpg';
import Soup6 from '../Images/Soup6.jpg';
import LaktosIcone from '../Icone/LaktosIcone';
import Items from '../../components/SoupService/SoupService'
const NavbarContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:0rem;
width:100%;
`;

const StyledP = styled.p`
    margin-top:7.5rem;
    font-size:1.6rem;
    z-index:10;
    color:#242425;
    position:fixed;
    


@media screen and (max-width: ${theme.screenSize.small}){
    font-size:1.8rem;
 

}
`;



const SoupMainContainer = styled.div`
flex-direction:start;
flex-direction:column;
justify-content:center;
width:100%;


`;



const SoupMenu = (props) => {

    const [address, setAddress] = useLocalState('address');



return(


<MainWrapper>

<NavbarContainer>       
<StyledP>{address}</StyledP>
</NavbarContainer> 




<SoupMainContainer>

    {Items.map(Item => {
        return (<Soup img={Item.image} title={Item.title} text={Item.description} price={Item.price + " kr"} />)
    })}

</SoupMainContainer>


</MainWrapper>


)

}

export default SoupMenu;