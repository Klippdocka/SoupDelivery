import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckOutProgressMain from '../../components/CheckOutProgress/CheckOutProgressMain';
import NextBtn from '../../components/Buttons/NextBtn';
import { useLocalStorage } from '../Hooks/UseLocalState';
import Close from '../../components/Icone/Close';
import { useHistory } from "react-router-dom";
import CloseIcone from '../Icone/CloseIcone';
import { ImgContainer } from '../Home/styledHome';
import ProfileImg from '../Images/craig.jpg';
import axios from '../../axios';
import theme from '../../theme';

const MainWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;




`;


const ContentContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;


@media screen and (min-width: ${theme.screenSize.small}){
  
  width:60%;
  }

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
margin-top:4rem;
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
margin-bottom:0rem;
`;

const Div = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
text-align:center;

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


@media screen and (min-width: ${theme.screenSize.small}){
  
  width:60%;
  }

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

const ImageContainer = styled.div`
height:6rem;
width:6rem;
`;

const Img = styled.img`
object-fit:cover;
width:100%;
height:100%;
border-radius:50%;
`;

const DivContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
width:100%;
height:10rem;
`;

const PStyle = styled.p`
color:#656565;
font-weight:400;
font-size:1.7rem;
padding-left:1rem;
`;

const TextContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
width:80%;
height:10rem;
margin-top:14rem;

`;

const StyledOrderNum = styled.p`
color:black;
font-weight:400;
font-size:1.7rem;
padding-left:1rem;
`;



const CheckOutProgressDone = (props) => {

    const [order, setOrder] = useLocalStorage('order');

    let History = useHistory();



    return (
        <MainWrapper>
            <CloseIconeWrapper onClick={() => History.push('/')}><CloseIcone /></CloseIconeWrapper>
            <TitleContainer>
                <Title>Beställning bekräftad</Title>
                <Div><StyledP>Din order:</StyledP><StyledOrderNum>{order.id}</StyledOrderNum></Div>
            </TitleContainer>

            <StyledDiv><P>Leveranstid</P></StyledDiv>




            <ContentContainer>
                <H2>15-20 min</H2>
            </ContentContainer>



            <ContentContainer><BorderUnderline /></ContentContainer>
            <DivContainer>
                <ImageContainer>
                    <Img src={ProfileImg} />
                </ImageContainer>
                <PStyle>David levererar din order</PStyle>
            </DivContainer>
            <DivContainer>
                <TextContainer><PStyle>Vid funderingar kontakta hos på resturangen tel: 08 111 111 11</PStyle></TextContainer></DivContainer>
        </MainWrapper>

    )



};


export default CheckOutProgressDone;