import React from 'react';
import { MainWrapper, ImgContainer, HomeImg, PositionContainer } from './styledHome';
import Soup5 from '../Images/Soup5.jpg';
import Position from '../Position/position'
import Logo from '../../components/Icone/Loggo';
import styled from 'styled-components';
import Phone from'../../components/Icone/Phone';





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
max-width:40rem;
min-height:30rem;
margin-top:20rem;
opacity:0.99;
border-radius:0.5rem;
`;

const H3 = styled.h3`
font-size:1.5rem;
margin-bottom:0rem;
margin-left:1rem;
`;

const P = styled.p`
font-size:1.2rem;
`;

const TextContainer = styled.div`
padding:2rem 2rem 3rem 2rem;
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction:column;
`;

const H4 = styled.h4`
font-size:1.3rem;
margin-left:1rem;
margin-bottom:1rem;
color:#23591e;

`;
const PhoneDiv = styled.div`
display:flex;
margin-top:2rem;
flex-direction:row;
justify-content:flex-start;
align-items:center;
text-align:center;
`;

const Input = styled.input`
width:14rem;
height:2rem;`;

const MessageInput = styled.input`
width:14rem;
height:6rem;
`;

const Button = styled.div`
display:flex;
height:2rem;
width:10rem;
background-color:#99b54a;
color:white;
font-size:1rem;
text-align:center;
justify-content:center;
align-items:center;
`;

const ButtonContainer = styled.div`
height:4rem;
display:flex;
justify-content:center;
align-items:center;
width:100%;
text-align:center;
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
            <TextContainer><H3>Komma i kontakt</H3>
            <P> du hittar oss Eight Soups i central Stockholm på adressen Odengatan 92, 113 22 Stockholm. 
            </P>
            <P>För tidsbokning och annan information vänligen kontakta oss på <PhoneDiv><Phone/><H4>08-111 111 11</H4></PhoneDiv> </P>
            </TextContainer>
            <TextContainer>
                <P>Ditt namn</P>
                <Input/>
                <P>Din e-post</P>
                <Input/>
                <P>Ditt meddelande</P>
                    <MessageInput/>

                 <ButtonContainer><Button>Skicka</Button></ButtonContainer> 
                    </TextContainer>
              

        </StyledDiv>





      </MainWrapper>

    )

  }



export default About;