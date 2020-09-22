import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';

const MenuSoupContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:90%;
height:60rem;
max-width:60rem;
background-image: url(${props => props.image});
background-repeat: no-repeat;
background-size: cover;
margin-top:2rem;
box-shadow: 11px 13px 10px -12px rgba(0,0,0,0.75);
`;

const SoupMainContainer = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width:100%;
position: relative;
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
box-shadow: -13px -13px 5px -11px rgba(0,0,0,0.18);




`;


const TitleContainer = styled.div`
position: relative;
display:flex;
flex-direction:column;
justify-content:start;
align-items:start;
width:100%;
background-color:rgba(255,255,255,0.6);


`;


const Title = styled.h1`
color:#2f3030;
padding-top:2rem;
margin-block-start: 0em;
    margin-block-end: 0em;
    margin-left:2rem;
`;

const SoupDescription = styled.p`
width:20rem;
margin-left:2rem;
margin-block-start: 0em;
    margin-block-end: 0em;
    padding-top:1rem;
    padding-bottom:2rem;
    
color:#2f3030;
`;

const ContentContainer = styled.div`
    margin-top: auto;
    width: 50rem;
    box-shadow: 11px 13px 10px -12px rgba(0,0,0,0.75);
    margin-bottom:2rem;
    


@media screen and (max-width: ${theme.screenSize.small}){
    width:90%;
}
`

const Soup = (props) => {

    return (

        <SoupMainContainer>
            <MenuSoupContainer image={props.img}>

                <ContentContainer>
                    <TitleContainer>
                        <Title>{props.title}</Title>
                            <SoupDescription>{props.text}</SoupDescription>
                    </TitleContainer>

                    <BtnAdd>Lägg till</BtnAdd>

                </ContentContainer>

            </MenuSoupContainer>
        </SoupMainContainer>


    )

}

export default Soup;
