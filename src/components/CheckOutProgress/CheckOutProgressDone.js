import React from 'react';
import styled from 'styled-components/macro';
import { useLocalStorage } from '../Hooks/UseLocalState';
import { useHistory } from "react-router-dom";
import CloseIcone from '../Icone/CloseIcone';
import ProfileImg from '../Images/craig.jpg';
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
display:${props => props.DeliveryType ? 'flex' : 'none'};
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
font-size:4em;
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
display:${props => props.DeliveryType ? 'flex' : 'none'};
justify-content:center;
align-items:center;
flex-direction:row;
width:100%;
height:10rem;
`;

const DivContainerText = styled.div`

justify-content:center;
align-items:center;
flex-direction:row;
width:100%;
height:10rem;
`;

const PickUpContainer = styled.div`
display:${props => !props.DeliveryType ? 'flex' : 'none'};
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
height:6rem;
padding-top:4rem;
text-align:start;
`;

const PStyle = styled.p`
color:#656565;
font-weight:400;
font-size:1.6rem;
padding-left:1rem;
margin-block-start: 0em;
 margin-block-end: 0em;
`;

const TextContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
width:90%;
height:10rem;
margin-left:1rem;
margin-top:10rem;

`;

const StyledOrderNum = styled.p`
color:black;
font-weight:400;
font-size:1.7rem;
padding-left:1rem;
`;


const DivMapContainer = styled.div`
flex-direction:row;
display:flex;
justify-content:center;
text-align:center;
`;

const Ptag = styled.p`
font-weight:500;
color:#656565;
font-size:1.7rem;
margin-block-start: 0em;
margin-block-end: 0em;
padding-bottom:1rem;
`;

const TitleDiv = styled.div`
display:${props => !props.DeliveryType ? 'flex' : 'none'};
margin-top:3rem;
width:100%;
background-color:#f5f5f5;
height:5rem;
justify-content:flex-start;
align-items:center;
text-align:flex-start;
padding-left:3rem;

`;


const CheckOutProgressDone = (props) => {

    const [localActive, setLocalActive] = useLocalStorage('delivery')
    const [order, setOrder] = useLocalStorage('order');
    

    let History = useHistory();



    return (
        <MainWrapper>
            <CloseIconeWrapper onClick={() => History.push('/')}><CloseIcone /></CloseIconeWrapper>
            <TitleContainer>
                <Title>Beställning bekräftad</Title>
                <Div><StyledP>Din order:</StyledP><StyledOrderNum>{order.id}</StyledOrderNum></Div>
            </TitleContainer>

            <StyledDiv DeliveryType={localActive}><P>Leveranstid</P></StyledDiv>
            <TitleDiv DeliveryType={localActive}><P>Avhämtning</P></TitleDiv>



            <ContentContainer>
                <H2>15-20 min</H2>
            </ContentContainer>



            <ContentContainer><BorderUnderline /></ContentContainer>

            <DivContainer DeliveryType={localActive} >
                <ImageContainer>
                    <Img src={ProfileImg} />
                </ImageContainer>
                <PStyle>David levererar din order</PStyle>
            </DivContainer>

            <PickUpContainer DeliveryType={localActive}>
              <DivMapContainer><Ptag>Eight Soups </Ptag></DivMapContainer>
               <Ptag>Odengatan 92 </Ptag> 
               <Ptag> 113 22 Stockholm </Ptag>
            </PickUpContainer>

            <DivContainerText>
                <TextContainer><PStyle>Vid funderingar kontakta hos på resturangen tel: 08 111 111 11</PStyle></TextContainer></DivContainerText>
        </MainWrapper>

    )



};


export default CheckOutProgressDone;