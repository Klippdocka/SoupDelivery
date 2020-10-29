import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useLocalState, useLocalStorage } from '../Hooks/UseLocalState';
import MasterCredit from '../../components/Icone/MasterCredit';
import TimeIcone from '../../components/Icone/time';
import { useHistory } from "react-router-dom";
import axios from '../../axios';
import theme from '../../theme';
import { CartContext } from '../Hooks/CartContext';

const MainWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:100%;
width:100%;
`;


const ContentContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
margin-top:1.5rem;


@media screen and (min-width: ${theme.screenSize.small}){
  
  width:60%;
  }

`;



const TitleDiv = styled.div`

height:4.5rem;
width:100%;
background-color:#f5f5f5;
display:flex;
justify-content:flex-start;
text-align:center;
align-items:Center;
margin-top:2rem;
`;

const StyledH2 = styled.h2`
display:${props => props.DeliveryType ? 'block' : 'none'};
margin-left:4.5rem;
font-size:1.8rem;
color:#656565;
font-weight:600;
`;




const BorderUnderline = styled.div`
width:85%;
height:0.1rem;
background-color:#dedede;
`;

const ItemContainer = styled.div`
display:flex;
justify-content:Center;
align-items:center;
height:7rem;
width:100%;

flex-direction:column;

`;


const AmountWrapper = styled.div`
flex:1;
display:flex;
justify-content:start;
align-items:center;
margin-top:1.3rem;
margin-left:2.2rem;
`;

const Amount = styled.p`
display:flex;
font-weight:600;
font-size:1.5rem;
justify-content:center;
width:2rem;
height:2rem;
background-color:#f5f5f5;
margin-bottom:0rem;
margin-top:0rem;
color:#707070;
margin-block-start: 0em;
    margin-block-end: 0em;
`;

const Title = styled.p`
flex:5;
margin-right:5rem;
margin-bottom:0rem;
font-size:1.4rem;
color:#707070;
`;

const AccesssoriesWrapper = styled.div`
width:67%;
display:flex;
justify-content:flex-start;
text-align:start;

`;

const Accesssories = styled.p`
margin-block-start: 0em;
margin-block-end: 0em;
margin-bottom:0.8rem;
text-align:start;
margin-top:0.3rem;
color:#707070;

`;

const FirstLineContainer = styled.div`
width:90%;
display:flex;
align-items:center;
justify-content:space-between;
text-align:start;
` ;

const Price = styled.p`
font-size:1.3rem;
margin-bottom:0rem;
color:#707070;

`;


const StyledP = styled.p`
font-size:1.5rem;
color:#707070;
margin-left:3.5rem;
margin-bottom:0rem;
margin-block-start: 0rem;
text-align:start;
`;

const StyledName = styled.p`
font-size:1.5rem;
color:#707070;
margin-left:0.5rem;
margin-bottom:0rem;
font-weight:700;
margin-top:0rem;
`;

const NameDiv = styled.div`
display:${props => props.DeliveryType ? 'flex' : 'none'};
justify-content:flex-start;
align-items:flex-start;
flex-direction:column;
margin-right:19rem;
text-align:center;
;`

const NameContainer = styled.div`
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-direction:row;
text-align:center;
margin-left:3rem;
margin-top:1rem;
margin-bottom:0rem;
`;


const DeliveryDiv = styled.div`
margin-top:0.5rem;
margin-bottom:0.5rem;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:column;
width:100%;

`;

const PaymentDiv = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
margin-top:2.5rem;
flex-direction:row;

`;

const StyledCreditCardNumber = styled.h2`
display:flex;
justify-content:start;
align-items:center;
width:80%;
font-size:3rem;
color:#707070;
margin-bottom:1.2rem;
margin-top:0rem;
text-align:center;
font-weight:600;
margin-left:2rem;
`;


const StyledNum = styled.p`
font-size:1.5rem;
color:#707070;
margin-left:0.5em;
margin-bottom:0rem;
font-weight:600;
`;


const StyledSum = styled.p`
margin-left:12rem;
font-size:1.5rem;
color:#707070;

margin-bottom:0rem;
font-weight:600;
`;

const StyledTotal = styled.p`
font-size:2rem;
color:black;
margin-left:0rem;
margin-bottom:0rem;
font-weight:600;
margin-top:0rem;
`;


const StyledPtag = styled.p`
font-size:1.7rem;
color:#707070;
margin-left:0rem;
margin-bottom:0rem;
`;

const Div = styled.div`
margin-top:3rem;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
`;



const BtnContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
background-color:#9ab54a;
margin-top:2rem;
 cursor: pointer;

 @media screen and (min-width: ${theme.screenSize.small}){
  
  width:60%;
  }


`;

const BtnTitle = styled.h2`

text-align:center;
font-size:2rem;
font-weight:300;

color:white;
`;

const IconeWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
flex-direction:row;
margin-left:11.5rem;


`;

const StyledTime = styled.p`
font-size:1.4rem;
color:#707070;
margin-left:0.5rem;
margin-bottom:1rem;
`;

const Ptext = styled.p`
margin:0rem;
font-size:1.5rem;
color:#707070;
font-weight:400;
`;

const DivPickup = styled.div`
display:${props => !props.DeliveryType ? 'flex' : 'none'};
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
margin-right:18rem;
text-align:center;
`;

const PickUpH2 = styled.h2`
display:${props => !props.DeliveryType ? 'block' : 'none'};
margin-left:4.5rem;
font-size:1.8rem;
color:#656565;
font-weight:600;
`;



const CheckOutProgressOrder = (props) => {
    const [longAddress, setLongAdress] = useLocalState('longAddress');
    const [localCreds, setLocalCreads] = useLocalStorage('creads');
    const [number, setNumber] = useLocalStorage('CreditNumber');
    const [total, setTotal] = useLocalStorage('total');
    const [order, setOrder] = useLocalStorage('order');
    const [cart, setCart] = useContext(CartContext);
    const [localActive, setLocalActive] = useLocalStorage('delivery')

    let history = useHistory();

   

    let str = number;
    let len = str.length - 1,
        newstr = "",
        i = 0;

    while (i != 4) {
        newstr = str[len] + newstr;
        len--; i++;

    }
    function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    const OrderSubmit = () => {

        const order = {
            id: makeid(8),
            soups: cart.map((element) => element.item.title),
            price: total,
            customer: {
                firstName: localCreds.firstName,
                lastName: localCreds.lastName,
                address: longAddress,
                email: localCreds.email
            }

        }
     
        axios.setOrder(order)
            .then(resp => {
                setOrder(order)
                history.push('/confirmedorder')
            })
            .catch(error => console.log(error))

    }





    return (



        <MainWrapper>

            <ContentContainer>

                <TitleDiv>
                    <StyledH2>Din varukorg</StyledH2>
                </TitleDiv>


                {
                    cart.map(({ item, accessory, drink, amount }, i) => {

                        return <React.Fragment key={i}>
                            <ItemContainer>
                                <FirstLineContainer> <AmountWrapper><Amount>{amount}</Amount></AmountWrapper> <Title>{item.title}</Title> <Price>{item.price} kr</Price></FirstLineContainer>
                                {
                                    accessory.title && drink.title ?
                                        <AccesssoriesWrapper> <Accesssories>
                                            {accessory.title + ', ' + drink.title + ' (' + drink.price + 'kr)'}
                                        </Accesssories> </AccesssoriesWrapper>
                                        : accessory.title && drink.title == undefined ?
                                            <AccesssoriesWrapper><Accesssories>
                                                {accessory.title}
                                            </Accesssories></AccesssoriesWrapper>
                                            : accessory.title == undefined && drink.title ?
                                                <AccesssoriesWrapper>  <Accesssories>
                                                    {drink.title + ' (' + drink.price + 'kr)'}
                                                </Accesssories></AccesssoriesWrapper>
                                                : null
                                }

                            </ItemContainer>

                            <BorderUnderline />

                        </React.Fragment>
                    })
                }

                <TitleDiv>
                    <StyledH2 DeliveryType={localActive}>Levereras till</StyledH2>
                    <PickUpH2 DeliveryType={localActive}>Avhämtning</PickUpH2>
                    <IconeWrapper>
                        <TimeIcone />
                    </IconeWrapper>
                    <StyledTime>15-20 min</StyledTime>

                </TitleDiv>
                <DeliveryDiv>
                    <NameDiv DeliveryType={localActive}> <NameContainer><StyledName>{localCreds.firstName}</StyledName><StyledName>{localCreds.lastName} </StyledName></NameContainer>
                        <StyledP>{longAddress}</StyledP></NameDiv>


            
                <DivPickup DeliveryType={localActive}><Ptext>Eight Soups</Ptext>
                <Ptext>Odengatan 92</Ptext>
                <Ptext>113 22 Stockholm</Ptext></DivPickup>
         


                </DeliveryDiv>

                <TitleDiv>
                    <StyledH2>Betalning</StyledH2>
                </TitleDiv>

                <PaymentDiv>
                    <MasterCredit /> <StyledCreditCardNumber> ... <StyledNum>{newstr}</StyledNum><StyledSum>{total} kr</StyledSum></StyledCreditCardNumber>
                </PaymentDiv>
                <BorderUnderline />


                <Div>

                    <StyledPtag>Totalbelopp</StyledPtag>
                    <StyledTotal>{total} kr</StyledTotal>

                </Div>

            </ContentContainer>


            <BtnContainer onClick={() => OrderSubmit()}>

                <BtnTitle>Beställ</BtnTitle>

            </BtnContainer>


        </MainWrapper>

    )


};


export default CheckOutProgressOrder;