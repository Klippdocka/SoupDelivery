import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckOutProgressMain from '../../components/CheckOutProgress/CheckOutProgressMain';
import NextBtn from '../../components/Buttons/NextBtn';
import { useLocalStorage } from '../Hooks/UseLocalState';




const MainWrapper = styled.div`
display:flex;
flex-direction:column;
width:100%;

`;

const NextBtnContainer = styled.div`
display:flex;

align-items:baseline;
margin-top:40rem;
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
height:5rem;
width:100%;

flex-direction:column;

`;

const Price = styled.p`
font-size:1.3rem;
margin-bottom:0rem;
color:#707070;
`;

const Amount = styled.p`
display:flex;
font-weight:600;
font-size:1.5rem;
justify-content:center;
width:2.5rem;
height:2.5rem;
background-color:#f5f5f5;
margin-bottom:0rem;
color:#707070;
margin-top:1rem;
align-items:center;
`;

const Title = styled.p`
margin-right:5rem;
margin-bottom:0rem;
font-size:1.4rem;
color:#707070;
`;

const Accesssories = styled.p`
margin-right:6rem;
margin-top:0.3rem;
color:#707070;
`;

const FirstLineContainer = styled.div`
width:80%;
display:flex;
align-items:center;
justify-content:space-between;
text-align:center;

`
;

const CheckOutProgressBasket = (props) => {

    const [soup, setSoup] = useLocalStorage('soup');
    const [items, setItems] = useState([]);


    useEffect(() => {
        let shoppingCart;
    
        if (localStorage.getItem('item') != null) {
            const item = JSON.parse(localStorage.getItem('item'));
            setItems(item);
        }
    }, []);

     

 

    const [active, setActive] = useState(false);  




    return(
        <MainWrapper>
            
            <CheckOutProgressMain page={1}/>

        <ContentContainer>


            <DeliveryContainer> 
                <Delivery  onClick={() => setActive(!active)} active={active}><DeliveryP active={active}>Leverans</DeliveryP></Delivery> 
            
                <PickUp  onClick={() => setActive(!active)} active={active}><PickUpP active={active}>Avhämtning</PickUpP></PickUp>
            </DeliveryContainer>

        </ContentContainer>

        <ShoppingCartWrapper>

    
    {
        items.map(({item, accessory, drink}, i) => {
            console.log(item);
            return <React.Fragment key={i}>
                <ItemContainer>
        <FirstLineContainer> <Amount>{i+1}</Amount> <Title>{item.title}</Title> <Price>{item.price}</Price></FirstLineContainer>
            {
                accessory.title && drink.title ?
                    <Accesssories>
                        {accessory.title + ', ' + drink.title + ' (' + drink.price + 'sek)'}
                    </Accesssories>
                : accessory.title && drink.title == undefined ?
                    <Accesssories>
                        {accessory.title}
                    </Accesssories>
                : accessory.title == undefined && drink.title ?
                    <Accesssories>
                        {drink.title + ' (' + drink.price + 'sek)'}
                    </Accesssories>
                : null
            }
    
                </ItemContainer>
                    <BorderUnderline/>
            </React.Fragment>
        })
    }
    </ShoppingCartWrapper>
        
            <NextBtnContainer><NextBtn/></NextBtnContainer>
            

        
        </MainWrapper>

    )

    
};


export default CheckOutProgressBasket;