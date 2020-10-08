import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CheckOutProgressMain from '../../components/CheckOutProgress/CheckOutProgressMain';
import NextBtn from '../../components/Buttons/NextBtn';
import { useLocalState, useLocalStorage } from '../Hooks/UseLocalState';
import { useHistory } from "react-router-dom";


const MainWrapper = styled.div`
display:flex;
flex-direction:column;
width:100%;

`;

const ContentContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;
justify-content:center;
align-items:center;
margin-top:6rem;
margin-bottom:7rem;


`;

const NextBtnContainer = styled.div`
display:flex;
align-items:baseline;
margin-top:4rem;
`;

const InputContainer = styled.div`
margin-top:0rem;
display:flex;
justify-content:flex-start;
align-items:flex-start;
flex-direction:column;
`;

const Input = styled.input`
height:4rem;
width:30rem;
border:none;
font-size:1.5rem;
`;


const BorderUnderline = styled.div`
margin-bottom:1rem;
width:100%;
height:0.1rem;
background-color:#dedede;
`;

const StyledH2 = styled.h2`
font-size:1.6rem;
font-weight:400;
color:#707070;
margin-bottom:0rem;
`;

const CheckOutProgressAddres = (props) => {
   

    const [longAddress, setLongAdress] = useLocalState('longAddress');
  
 
    const [creds, setCreds] = useState({ firstName: '', lastName:'', address:longAddress , email:'' });
    const [localCreds, setLocalCreads] = useLocalStorage('creads');


    let history = useHistory();

    const handleSubmit = (e) => {
    


        
        let c = creds;
        setLocalCreads(c);
        console.log(localCreds);

        history.push('/ShoppingCartPayment')

    }


    const onChangeInputHandler = (e) => {
    
        
        const {name, value} = e.target;
        setCreds({...creds, [name]: value})
        
       


    }



    return(
        <MainWrapper>
            
            <CheckOutProgressMain page={2}/>


            <ContentContainer>


                
                <InputContainer>
                <StyledH2>Förnamn</StyledH2>
                 <Input type="firstName" name="firstName" onChange={onChangeInputHandler}/>
                 
            <BorderUnderline/>
            </InputContainer>

            <InputContainer>
            <StyledH2>Efternamn</StyledH2>
            <Input type="lastName" name="lastName" onChange={onChangeInputHandler}/>
            <BorderUnderline/>
            </InputContainer>


            <InputContainer>
            <StyledH2>Adress</StyledH2>
            <Input type="address" name="address" placeholder={creds.address} onChange={onChangeInputHandler}></Input>
            <BorderUnderline/>
            </InputContainer>




            <InputContainer>
            <StyledH2>Mejladress</StyledH2>
            <Input type="email" name="email"onChange={onChangeInputHandler}></Input>
            <BorderUnderline/>
            </InputContainer>
       

            </ContentContainer>
          


           <NextBtnContainer onClick={handleSubmit} ><NextBtn/></NextBtnContainer> 
        </MainWrapper>
    )
}


export default CheckOutProgressAddres;

