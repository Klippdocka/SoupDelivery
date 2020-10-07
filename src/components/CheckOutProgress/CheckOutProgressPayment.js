import React, { useState } from 'react';
import styled from 'styled-components';
import CheckOutProgressMain from '../../components/CheckOutProgress/CheckOutProgressMain';


const MainWrapper = styled.div`
height:100%;
width:100%;
`;


const StyledDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
margin-top:6rem;

`;


const InputContainer = styled.div`
margin-top:0rem;
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-direction:column;
`;

const Input = styled.input`
margin-top:1rem;
height:4rem;
width:30rem;
border:none;
font-size:1.5rem;
background-color:#f5f5f5;
`;

const InputShort = styled.input`

margin-top:1rem;
height:4rem;
width:14rem;
border:none;
font-size:1.5rem;
background-color:#f5f5f5;

`;



const InputShortContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
width:85%;
margin-top:1rem;

`;


const BorderUnderline = styled.div`
margin-bottom:1rem;
width:100%;
height:0.1rem;
background-color:#dedede;
`;

const StyledH2 = styled.h2`
font-size:2rem;
font-weight:400;
color:#707070;
margin-bottom:0rem;
margin-bottom:1rem;
`;






const CheckOutProgressPayment = (props) => {



    const [card, setCard] = useState('');

    const onChangeInputHandler = (e) => {




    }


    const onInput = (e) => {
        let value= e.target.value;
        if(value > 3) {
           props.inputValue = value.slice(0,2);
        }
    }



    return (


        <MainWrapper>

            <CheckOutProgressMain page={3} />

            <StyledDiv>


                <InputContainer>
                    <StyledH2>Fyll i kortuppgifter</StyledH2>
                    <Input placeholder="Kortnummer" maxLenght="15" type="number" name="cardNumber" onChange={onChangeInputHandler} />
                </InputContainer>


                <InputShortContainer>
                    <InputContainer>

                        <InputShort value={props.inputValue} placeholder="MM / ÅÅ" type="number" name="date" onChange={onChangeInputHandler} />
                    </InputContainer>

                    <InputContainer>

                        <InputShort min="4" max="5" placeholder="CCV" type="number" name="CCV" onChange={onChangeInputHandler} />
                    </InputContainer>
                </InputShortContainer>


            </StyledDiv>




        </MainWrapper>










    )


};


export default CheckOutProgressPayment;