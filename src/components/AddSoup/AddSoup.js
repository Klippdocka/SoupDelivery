import React, { useState, useContext, Component, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import CloseIcone from '../../components/Icone/CloseIcone';
import { accesssories, drinks } from '../../components/SoupService/SoupService';
import { useLocalStorage } from '../Hooks/UseLocalState';
import AddIcone from '../../components/Icone/AddIcone';
import RemoveIcone from '../../components/Icone/RemoveIcone';
import { useHistory } from "react-router-dom";

import { SoupsContext } from '../../App.js'

import {
    soupReducer,
    initialState,
    addAction,
    markAction,
    deleteAction
} from "../../soup";


const ModalContainer = styled.div`
position:fixed;
z-index:1;
height:100%;
width:100%;
top:0rem;
left:0rem;
background:rgba(79,79,79,0.4);
overflow:hidden;
display: ${props => props.modalOpen ? 'block' : 'none'};

`;



const AddSoupCard = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:70rem;
width:40rem;
background-color:#ffffff;


overflow-y:hidden;






@media screen and (max-width: ${theme.screenSize.small}){
  
   width:34rem;
}

`;

const AddSoupWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:100%;
`;


const CloseIconeContainer = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
width:100%;




`;

const StyledCloseIcone = styled.div`

display:flex;
justify-content:flex-end;

margin-top:1rem;
margin-right:1rem;
border-radius:3rem;

`;

const ImgContainer = styled.div`
background-image: url(${props => props.image});
background-repeat: no-repeat;
background-size: cover;
width:100%;
height:30rem;
`;

const TitleContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
height:12rem;
width:100%;
justify-content:space-around;
background-color:#ffffff;
`;

const Title = styled.h2`
font-size:1.9rem;
font-weight:500;
margin-left:1.5rem;
color:#242425;
`;

const Price = styled.h2`
font-size:1.9rem;
font-weight:600;
margin-right:1.5rem;
color:#242425;
`;

const Options = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
height:15rem;
width:100%;
`;




const OptionsItems = styled.div`
background-color:#ffffff;
width:100%;
height:10rem;
`;

const TitleGrey = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
background-color:#f5f5f5;
height:7rem;
width:100%;
`;
const StyledH3 = styled.h3`
margin-left:3rem;
color:#656565;
width:100%;
margin-block-start: 0em;
margin-block-end: 0em;
font-size:1.6rem;
font-weight:500;

`;

const StyledInputContainer = styled.div`
display:flex;
justify-content:flex-start;
flex-direction:column;
text-align:row;
margin-left:1.8rem;
height:12rem;
`



const StyledDiv = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
flex-direction:row;
width:100%;
height:12rem;
`;

const AddSoupButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
height:4rem;
width:18rem;
background-color:#9ab54a;
color:white;
font-size:1.6rem;
cursor: pointer;

`;


const InputContainer = styled.div`
flex-direction:row;
margin-top:1.2rem;
`;

const TotalSoup = styled.h3`
color:#b7b7b7;
font-size:1.8rem;


`;

const AddSoupContainer = styled.div`
display:flex;
width:8rem;
height:4rem;
flex-direction:row;
justify-content:space-between;
align-items:center;
cursor: pointer;

`;

const IconeDiv = styled.div`
`;

const CheckboxContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
flex:2;
font-size:1.6rem;
width:8rem;
margin-left:1rem;
font-weight:300;
`;

const PriceContainer = styled.div`
flex:1;
display:flex;
justify-content:flex-end;
margin-right:2.5rem;
font-size:1.6rem;
`;

const Container = styled.div`
display:flex;
align-items:center;
flex-direction:row;
`;

const AddSoup = (props) => {


   let Item = props.openItem;



    const [count, setCount] = useState(1);
    const [counter, setCounter] = useLocalStorage('count', 0)



    const [checkbox, setCheckbox] = useState({
        accesssory: {},
        value: "",
        selected: false
    });
    
    
    const [checkboxDrinks, setCheckboxDrinks] = useState({
        drink: {},
        value: "",
        selected: false        
    })

    


    const handleChange = (element) => {
        setCheckbox({
            accesssory: element,
            value: element.title,
            selected: !checkbox.selected
        })
        
      
        
    }    


    const handleSubmit = (event) => {
       


        let shoppingCart = [];

       if (localStorage.getItem('item') != null) {
           shoppingCart = JSON.parse(localStorage.getItem('item'));  
        }    
        
        const item = {
            item: Item,
            drink: checkboxDrinks.drink,
            accessory: checkbox.accesssory,
            amount: count
        }
        shoppingCart.push(item)
        localStorage.setItem('item', JSON.stringify(shoppingCart))


        setCheckbox({})
        setCheckboxDrinks({})
        setCount(1)
      
        console.log(counter)
        props.toggle();
        window.location.reload(true)

    }    

    function counterSoups() {
        setCounter(counter + 1);
        console.log('ddd')
    
    }



    const handleChangeDrinks = (element) => {
        setCheckboxDrinks({
            drink: element,
            value: element.title,
            selected: !checkboxDrinks.selected
        })


    }

    return (


        <ModalContainer modalOpen={props.openItem != null}>
          
            <AddSoupWrapper>
 
                <AddSoupCard>

                    <ImgContainer image={props.openItem.image}>

                        <CloseIconeContainer onClick={props.toggle}>
                            <StyledCloseIcone><CloseIcone /></StyledCloseIcone>
                        </CloseIconeContainer>
                    </ImgContainer>




                    <TitleContainer><Title>{props.openItem.title}</Title>
                        <Price>{props.openItem.price} Kr</Price></TitleContainer>

                    <TitleGrey><StyledH3>Välj tillbehör (obligatoriskt)</StyledH3></TitleGrey>

                    <Options>
                        <OptionsItems>

                            <StyledInputContainer>



                                {accesssories.map((element, index) => {
                                    return (<InputContainer key={index} item={element}>
                                        <Container>
                                            <input type="checkbox" name="value" id={element.id} value={element.title} onChange={() => handleChange(element)} checked={checkbox.selected && element.title === checkbox.value} />
                                            <CheckboxContainer> {element.title} </CheckboxContainer>
                                        </Container>

                                    </InputContainer>)
                                })}



                            </StyledInputContainer>

                        </OptionsItems>
                    </Options>

                    <TitleGrey><StyledH3>Välj dryck</StyledH3></TitleGrey>

                    <Options>
                        <OptionsItems>
                            <StyledInputContainer>
                                {drinks.map((element, index) => {
                                    return (<InputContainer key={index} item={element}>
                                        <Container>
                                            <input type="checkbox" name="value" id={element.id} value={element.title} onChange={() => handleChangeDrinks(element)} checked={checkboxDrinks.selected && element.title === checkboxDrinks.value} />

                                            <CheckboxContainer>{element.title} </CheckboxContainer>
                                            <PriceContainer>{`+`} {element.price} {`kr`} </PriceContainer>

                                        </Container>


                                    </InputContainer>)
                                })}

                            </StyledInputContainer>
                        </OptionsItems>
                    </Options>

                    <StyledDiv>

                        <AddSoupContainer>

                            <IconeDiv onClick={() => {
                                if(count > 1 && count < 11)
                                setCount(count - 1)
                            }}> <RemoveIcone /></IconeDiv>
                            <TotalSoup>{count}</TotalSoup>
                            <IconeDiv onClick={() => {
                                if(count > 0 && count < 10)
                                setCount(count + 1)
                            }}><AddIcone /></IconeDiv>
                        </AddSoupContainer>
                        <AddSoupButton onClick={() => {handleSubmit(); counterSoups();}}>Lägg till i varukorg</AddSoupButton>
                    </StyledDiv>

                </AddSoupCard>
            </AddSoupWrapper>

        </ModalContainer>




    )



}


export default AddSoup;