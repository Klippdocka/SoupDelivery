import React from 'react';
import { MainWrapper, ImgContainer, HomeImg, PositionContainer } from './styledHome';
import Soup5 from '../Images/Soup5.jpg';
import Position from '../Position/position'
import Logo from '../../components/Icone/Loggo';
import styled from 'styled-components';





const LogoContainer = styled.div`
display:flex;
position:absolute;
justify-content:flex-end;
height:4.5rem;
width:100%;
margin-top:4rem;
margin-right:4rem;


`;

const StyledDiv = styled.div`
position: absolute;
display:flex;
justify-content:center;
align-items:start;
flex-direction:row;
background-color:white;
max-width:35rem;
min-height:30rem;
margin-top:20rem;
opacity:0.9;
border-radius:0.5rem;
`;

const H3 = styled.h3`
font-size:1.5rem;
margin-bottom:0rem;
`;

const P = styled.p`
font-size:1.2rem;
`;
const BoldP = styled.p`
font-size:1.2rem;
font-weight:700;
margin-bottom:0rem;
`;


const TextContainer = styled.div`
padding:3rem;
flex:1;
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction:column;
`;


const About = (props) => {


    return (

      <MainWrapper>
        <ImgContainer>
        <LogoContainer>
        <Logo/>
        </LogoContainer>
          <HomeImg src={Soup5} />
        </ImgContainer>

        <StyledDiv>
            <TextContainer><H3>Allmänna villkor</H3>
            <P>När du gör en  beställninga från Eight Soups godkänner du köpevillkoren. Beställningen är bindande och du som kund är ansvarig över att angivna uppgifter så som namn, e-postadress och postadress, stämmer.   
            </P>
            <BoldP>Priser och avgifter</BoldP>
            <P>Alla priser är i svneksa kronor(SEK), inklusive gällande moms. Det tillkommer en fraktavgift på 39 SEK när du gör beställning hem. </P>
            <BoldP>Reklamation</BoldP>
            <P>Vid reklamation kontakta oss direkt på telefonnummer 08-111 111 11</P>
            </TextContainer>
         
        </StyledDiv>





      </MainWrapper>

    )

  }



export default About;