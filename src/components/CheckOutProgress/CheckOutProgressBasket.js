import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components/macro';
import CheckOutProgressMain from '../../components/CheckOutProgress/CheckOutProgressMain';
import NextBtn from '../../components/Buttons/NextBtn';
import { useLocalStorage } from '../Hooks/UseLocalState';
import Close from '../../components/Icone/Close';
import { useHistory } from "react-router-dom";
import theme from '../../theme';
import { CartContext } from '../Hooks/CartContext';

const MainWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;

`;

const NextBtnContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
margin-top:4rem;

`;

const ContentContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;


`;


const DeliveryContainer = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
width:100%;
margin-top:4.5rem;
@media screen and (min-width: ${theme.screenSize.small}){
  
  width:60%;
  }
`;

const Delivery = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:4rem;
width:12rem;
background-color:${props => props.active ? '#9ab54a' : '#f5f5f5'};
border-radius:0.5rem;
text-align:center;
`;

const DeliveryP = styled.p`
color:${props => props.active ? 'white' : '#707070'};

font-size:1.6rem;
margin-block-start: 0em;
    margin-block-end: 0em;

`;

const PickUpP = styled.p`
color:${props => !props.active ? 'white' : '#707070'};
font-size:1.6rem;
margin-block-start: 0em;
    margin-block-end: 0em;

`;

const PickUp = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:${props => !props.active ? '#9ab54a' : '#f5f5f5'};
height:4rem;
width:12rem;
border-radius:0.5rem;
text-align:center;

`;


const ShoppingCartWrapper = styled.div`
display:flex;
margin-top:4rem;
justify-content:flex-start;
align-items:center;
flex-direction:column;
width:100%;
min-height:20rem;


@media screen and (min-width: ${theme.screenSize.small}){
  
  width:60%;
  }

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

const DeliveryDiv = styled.div`
display:${props => props.active ? 'block' : 'none'};
`;
const PriceDelivery = styled.p`
font-size:1.3rem;
margin-bottom:0rem;

color:${props => !props.active ? '#707070' : '#ffffff'};`;

const Price = styled.p`
font-size:1.3rem;
margin-bottom:0rem;
color:#707070;

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
width:100%;

display:flex;
align-items:center;
justify-content:space-between;
text-align:start;

` ;

const CloseIconeWrapper = styled.div`
display:flex;
position:relative;
flex:1;
justify-content:center;
align-items:top;
height:5rem;
margin-bottom:0rem;
text-align:center;
margin-left:2rem;
margin-top:0.4rem;



`;

const TotalContainer = styled.div`
width:100%;
display:flex;
justify-content:flex-start;
flex-direction:row;
`;

const TotalWrapper = styled.div`
margin-top:4rem;
width:80%;
display:flex;
justify-content:flex-start;
flex-direction:column;
`;

const CheckOutProgressBasket = (props) => {
    const [localActive, setLocalActive] = useLocalStorage('delivery')
    const [active, setActive] = useState(localActive);
    const [cartTotal, setCartTotal] = useState(0);
    const [total, setTotal] = useLocalStorage('total');
    const [cart, setCart] = useContext(CartContext);

    let history = useHistory();



    useEffect(() => {
        subTotal();
    }, [cart]);

    useEffect(() => {
        saveDeliveryTotalToLocalStorage(active);
    }, [cart]);



    const handleRemoveItem = (index) => {

        let items = cart
        items = items.filter((row, i) => i !== index);
        setCart(items)
    
    };


    const handleActiveDelivery = () => {
        let newActive = !active

        saveDeliveryTotalToLocalStorage(newActive)
        setActive(newActive)
        setLocalActive(newActive)
    };

    const subTotal = () => {

        let totalVal = 0;
        for (let i = 0; i <cart.length; i++) {
            totalVal += cart[i].item.price;
    
        }
        setCartTotal(totalVal);

    }

    const saveDeliveryTotalToLocalStorage = (newActive) => {
        let totalVal = newActive ? 39 : 0;

        for (let i = 0; i <cart.length; i++) {
            totalVal += cart[i].item.price;
        }

        let totalDrink = 0;
       
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].drink.price != null)
                totalDrink += cart[i].drink.price;
        }

        setTotal(totalVal + totalDrink)
    }

    const btnNext = () => {
        

        history.push('/ShoppingCartAddres')
        
    }


    return (
        <MainWrapper>

            <CheckOutProgressMain page={1} />

            <ContentContainer>


                <DeliveryContainer>
                    <Delivery onClick={handleActiveDelivery} active={active}><DeliveryP active={active}>Leverans</DeliveryP></Delivery>

                    <PickUp onClick={handleActiveDelivery} active={active}><PickUpP active={active}>Avhämtning</PickUpP></PickUp>
                </DeliveryContainer>

            </ContentContainer>

            <ShoppingCartWrapper>


                {
                    cart.map(({ item, accessory, drink, amount }, i) => {

                        return <React.Fragment key={i}>
                            <ItemContainer>
                                <FirstLineContainer> <AmountWrapper><Amount>{amount}</Amount></AmountWrapper> <Title>{item.title}</Title> <Price>{item.price} kr</Price>  <CloseIconeWrapper onClick={() => handleRemoveItem(i)}><Close /></CloseIconeWrapper></FirstLineContainer>
                                {
                                    accessory.title && drink.title ?
                                        <AccesssoriesWrapper> <Accesssories>
                                            {accessory.title + ', ' + drink.title + ' (' + drink.price + 'kr)'}
                                        </Accesssories> </AccesssoriesWrapper>
                                        : accessory.title && drink.title === undefined ?
                                            <AccesssoriesWrapper><Accesssories>
                                                {accessory.title}
                                            </Accesssories></AccesssoriesWrapper>
                                            : accessory.title === undefined && drink.title ?
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
                <TotalWrapper>
                    <TotalContainer><Title> Delsumma </Title> <Price>{cartTotal}kr</Price></TotalContainer>
                    <TotalContainer><Title> Leverans</Title>

                        <DeliveryDiv active={active}><PriceDelivery>39</PriceDelivery></DeliveryDiv>
                        <DeliveryDiv active={!active}><PriceDelivery>0</PriceDelivery></DeliveryDiv>
                        <Price> kr</Price></TotalContainer>
                    <TotalContainer><Title> Totalbelopp</Title> <Price>{total}kr</Price></TotalContainer>
                </TotalWrapper>
            </ShoppingCartWrapper>

            <NextBtnContainer onClick={btnNext}><NextBtn /></NextBtnContainer>



        </MainWrapper>

    )


};


export default CheckOutProgressBasket;