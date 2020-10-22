import React, { useState, useEffect } from 'react';
import styled, { isStyledComponent } from 'styled-components';
import { useLocalState } from '../Hooks/UseLocalState';
import theme from '../../theme';
import { MainWrapper } from '../Home/styledHome';
import Soup from '../Soup/Soup';
//import { Items } from '../../components/SoupService/SoupService'
import axios from '../../axios';


const ContentContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:1000%;
height:100%;
`;

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
    color:#242425;
    position:fixed;
    


@media screen and (max-width: ${theme.screenSize.small}){
    font-size:1.8rem;
 

}
`;



const SoupMainContainer = styled.div`
margin-top:6rem;
flex-direction:start;
flex-direction:column;
justify-content:center;
width:100%;


`;



const SoupMenu = (props) => {

    const [address, setAddress] = useLocalState('address');

    const [items, setItems] = useState([]);


    useEffect(() => {

        axios.getSoups()
            .then(response => {
                setItems(response.data);


            })

    }, []);




    return (


        <MainWrapper>
          


                <NavbarContainer>
                    <StyledP>{address}</StyledP>
                </NavbarContainer>




                <SoupMainContainer>

                    {items.map((element, index) => {
                        return (<Soup key={index} item={element} />)
                    })}



                </SoupMainContainer>


        </MainWrapper>


    )

}

export default SoupMenu;