import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { useHistory } from "react-router-dom";
import AddSoup from '../../components/AddSoup/AddSoup';


const MainWrapper = styled.div`
display: flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
`;

const MenuSoupContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:90%;
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
position: relative;
display:flex;
align-items:center;
justify-content:center;
width:100%;
height:4rem;
background-color:#9ab54a;
color:white;
font-size:1.6rem;
box-shadow: 1px -2px 1px 0px rgba(0,0,0,0.15);
border-bottom-left-radius: 1rem;
border-bottom-right-radius: 1rem;





`;


const TitleContainer = styled.div`
position: relative;
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
    margin-top: auto;
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


const AllergyIcone = styled.div`
`;



const Soup = (props) => {


    const [modalState, setModalState] = useState(false);

  
    const openHandler = () => {
        if (!modalState) {
            setModalState(true)

        } else {
            setModalState(false)


        }
        console.log(modalState);
    }

    return (

     
        <SoupMainContainer>

                   
                
                <AddSoup modalOpen = {modalState} />
                        
            <MenuSoupContainer image={props.img}>

                <ContentContainer>
                    <TitleContainer>
                        <Title>{props.title}</Title>
                            <SoupDescription>{props.text}</SoupDescription>
                                <PriceContainer>{props.price}</PriceContainer>
                        <AllergyIcone>{props.allergyIcone}</AllergyIcone>
                    </TitleContainer>

                    <BtnAdd onClick={openHandler}>Lägg till</BtnAdd>
                </ContentContainer>
               
            </MenuSoupContainer>

           

        </SoupMainContainer>


    )

}

export default Soup;
