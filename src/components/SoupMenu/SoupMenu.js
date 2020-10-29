import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocalState } from '../Hooks/UseLocalState';
import theme from '../../theme';
import { MainWrapper } from '../Home/styledHome';
import Soup from '../Soup/Soup';
import axios from '../../axios';
import Close from '../Icone/CloseIcone';
import { useLocalStorage } from '../Hooks/UseLocalState';


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

const DeliveryDiv = styled.div`
display:${props => props.active ? 'none' : 'flex'};
position:fixed;
height:4rem;
width:100%;
background-color:#e4e8eb;

justify-content:center;
align-items:center;
margin-top:6rem;
box-shadow:5px 4px 15px 3px rgba(0,0,0,0.21);
flex-direction:row;
justify-content:space-around;


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


    /*const ShowDivHandler = () => {
        if(showDiv === false)
        { setShowDiv(showDiv)
        }else {
            
        }
    }*/



    return (


        <MainWrapper>
          


                <NavbarContainer>
                    <StyledP>{address}</StyledP>
                </NavbarContainer>


        { /*  <DeliveryDiv>
    <Ptag>Vid hemleverans tar vi en avgift på 39 kr</Ptag>
    <CloseContainer><Close/></CloseContainer>
            </DeliveryDiv> */}

                <SoupMainContainer>

                    {items.map((element, index) => {
                        return (<Soup key={index} item={element} />)
                    })}



                </SoupMainContainer>


        </MainWrapper>


    )

}

export default SoupMenu;