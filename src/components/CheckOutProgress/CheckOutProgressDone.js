import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckOutProgressMain from '../../components/CheckOutProgress/CheckOutProgressMain';
import NextBtn from '../../components/Buttons/NextBtn';
import { useLocalStorage } from '../Hooks/UseLocalState';
import Close from '../../components/Icone/Close';
import { useHistory } from "react-router-dom";
import CloseIcone from '../Icone/CloseIcone';


const MainWrapper = styled.div`
display:flex;
flex-direction:column;
width:100%;

`;


const ContentContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;

`;


const BorderUnderline = styled.div`
width:85%;
height:0.1rem;
background-color:#dedede;
`;



const CloseIconeWrapper = styled.div`
display:flex;
width:100%;
justify-content:flex-end;
align-items:flex-end;
padding-top:1rem;
margin-right:2rem;

`;

const TitleContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
margin-top:5rem;
flex-direction:column;



`;

const Title = styled.h1`
margin-top:0rem;
color:#656565;
font-size:2.4rem;
font-weight:400;
`;

const StyledP = styled.p`
margin-top:0rem;
color:#656565;
font-size:2rem;
font-weight:400;
`;
const Div = styled.div`
display:flex;
flex-direction:row;
`;

const StyledDiv = styled.div`
display:flex;
margin-top:3rem;
width:100%;
background-color:#f5f5f5;
height:5rem;
justify-content:flex-start;
align-items:center;
text-align:flex-start;
padding-left:3rem;
`;

const P = styled.p`
color:#656565;
font-weight:500;
font-size:2.3rem;
`;

const H2 = styled.h2`
color:#99b54a;
font-size:6rem;
font-weight:400;
`;



const CheckOutProgressDone = (props) => {




    return (
        <MainWrapper>
            <CloseIconeWrapper><CloseIcone/></CloseIconeWrapper>
            <TitleContainer>
                <Title>Beställning bekräftad</Title>
                <Div><StyledP>Din order:</StyledP><StyledP>Nummer</StyledP></Div>
            </TitleContainer>

<StyledDiv><P>Leveranstid</P></StyledDiv>




        <ContentContainer>
        <H2>15-20 min</H2>
        </ContentContainer>

    

<ContentContainer><BorderUnderline/></ContentContainer>

        </MainWrapper>

    )


};


export default CheckOutProgressDone;