import React, { useState } from 'react';
import styled from 'styled-components';
import CheckOutProgressMain from '../../components/CheckOutProgress/CheckOutProgressMain';
import MasterCredit from '../../components/Icone/MasterCredit';
import { useHistory } from "react-router-dom";
import theme from '../../theme';
import { useLocalStorage } from '../Hooks/UseLocalState';

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

@media screen and (min-width: ${theme.screenSize.small}){
  
  width:60%;
  }

`;


const BorderUnderline = styled.div`

width:100%;
height:0.1rem;
background-color:#dedede;
`;

const StyledH2 = styled.h2`
font-size:1.8rem;
font-weight:400;
color:#707070;
margin-bottom:0rem;
margin-bottom:1rem;
`;


const MasterCreditDiv = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
width:100%;
height:6rem;
margin-top:0rem;

`;

const PaymentDiv = styled.div`
display:flex;
justify-content:center;
text-align:start;
align-items:flex-start;
flex-direction:column;
width:80%;
cursor: pointer;
margin-bottom:4rem;
@media screen and (min-width: ${theme.screenSize.small}){
  
  width:60%;
  }

`;

const StyledP = styled.p`
margin-left:2rem;
font-size:1.5rem;
color:#707070;
`;

const IputWrapper = styled.div`

justify-content:center;
align-items:center;
flex-direction:column;
width:100%;
display:${props => props.cardOpen ? 'flex' : 'none'};

@media screen and (min-width: ${theme.screenSize.small}){
  
  width:60%;
  }

`;


const BtnContainer = styled.div`
align-items:center;
justify-content:center;
width:100%;
background-color:#9ab54a;
display:${props => props.cardOpen ? 'flex' : 'none'};
margin-top:10rem;
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

const StyledPtag = styled.p`
color:red;`;








const CheckOutProgressPayment = (props) => {

    let history = useHistory();

    const [number, setNumber] = useLocalStorage('CreditNumber');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [error, setError] = useState('');

    
    const [cardOpen, setCardOpen] = useState(false);


    const openHandler = (event) => {
        event.preventDefault();
        if (!cardOpen) {
            setCardOpen(true)

        } else {
            setCardOpen(false)


        }
    }

    const OpenChanges = (event) => {
        event.preventDefault();
        if (!cardOpen) {
            setCardOpen(true)

        } else {
            setCardOpen(false)


        }
    }


    const handleSubmit = () => {
        let numbers = /^[0-9]+$/;
        if (number && number.length === 0 || number.match(numbers) == null) { 
            setError('Alla fält måste vara i fylda och får endast innehålla siffror')
        }else if  (expiry && expiry.length === 0 || expiry.match(numbers) == null) {
            setError(error)
        }else if  (cvc && cvc.length === 0 || cvc.match(numbers) == null) {
            setError(error)
        }else {
            history.push('/ShoppingCartOrder')
        }
       
            
    }

   


    return (


        <MainWrapper>

            <CheckOutProgressMain page={3} />

            <StyledDiv>
                <PaymentDiv onClick={openHandler}>
                <StyledH2>Betalningsmetod</StyledH2>
                <BorderUnderline/>
             <MasterCreditDiv><MasterCredit/> <StyledP>Kredit- eller betalkort</StyledP> </MasterCreditDiv> 
             <BorderUnderline/> 
             </PaymentDiv>
           
               <IputWrapper cardOpen={cardOpen}>
                <InputContainer>
                    <StyledH2>Fyll i kortuppgifter</StyledH2>
                    <Input maxLength={16} type="tel" name="number" value={number} placeholder="Kortnummer" onChange={e => setNumber(e.target.value)} />
                </InputContainer>

                <InputShortContainer>
                    <InputContainer>

                        <InputShort maxLength={5} type="tel" name="expiry" value={expiry} placeholder="MM / ÅÅ" onChange={e => setExpiry(e.target.value)} />
                    </InputContainer>

                    <InputContainer>

                        <InputShort   maxLength={3} type="tel" name="cvc" value={cvc} placeholder="CVC" onChange={e => setCvc(e.target.value)} />
                    </InputContainer>
                </InputShortContainer>
                        <StyledPtag>{error}</StyledPtag>
                </IputWrapper>  

                <BtnContainer whenOpen={OpenChanges} cardOpen={cardOpen} onClick={() => handleSubmit()}>
                   
                   <BtnTitle>Gå till betalning</BtnTitle>
                
                </BtnContainer>

               
            </StyledDiv>




        </MainWrapper>










    )


};


export default CheckOutProgressPayment;