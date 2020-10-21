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
            <TextContainer><H3>Om oss</H3>
            <P>Eight Soups är en resturang belägen i centrala Stockholm. Där vi har funnits sen 2001. 
                Vi erbjuder våra gäster att avnjuta sin soppa hos oss i vår hemtrevliga resturang eller att få sin varma soppa levererad till valfri adress. 
            </P>
            </TextContainer>
            <TextContainer>
                <H3>Våra rätter</H3><P>Vi erbjuder åtta stycken väl valda soppor, med insperation från internationella rätter.
                    Vårat koncept är att vi väljer ut åtta soppar som är otroligt goda och byter ut menyn med jämna mellanrum.
                    Så att du som gäst har enklare att välja soppa och kan garanteras att den är välsmakande.</P></TextContainer>

        </StyledDiv>





      </MainWrapper>

    )

  }



export default About;