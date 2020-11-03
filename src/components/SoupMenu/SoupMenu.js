import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useLocalState } from '../Hooks/UseLocalState';
import theme from '../../theme';
import Soup from '../Soup/Soup';
import axios from '../../axios';
import Close from '../Icone/CloseIcone';
import { useLocalStorage } from '../Hooks/UseLocalState';


const ContentContainer = styled.div`
display:flex;
flex-direction: column;
width:100%;
height:100%;
`;

const NavbarContainer = styled.div`
position: fixed;
margin-top:0rem;
align-self: center;
`;

const StyledP = styled.p`
    
    font-size:1.6rem;
    color:#242425;

    


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


const Ptag = styled.p`
padding:0rem;
margin:0rem;
margin-left:5rem;
`;

const CloseContainer = styled.div`
display:flex;
justify-content:flex-end;
align-items:flex-end;
height:2rem;
width:4rem;


`;



const SoupMenu = (props) => {

    const [address, setAddress] = useLocalState('address');

    const [items, setItems] = useState([]);

    const [showDiv, setShowDiv] = useLocalStorage('show', true)



    useEffect(() => {

        axios.getSoups()
            .then(response => {
                setItems(response.data);


            })

    }, []);





    return (


        <ContentContainer>

            <SoupMainContainer>

                {items.map((element, index) => {
                    return (<Soup key={index} item={element} />)
                })}



            </SoupMainContainer>

            <NavbarContainer>
                <StyledP>{address}</StyledP>
            </NavbarContainer>


        </ContentContainer>


    )

}

export default SoupMenu;