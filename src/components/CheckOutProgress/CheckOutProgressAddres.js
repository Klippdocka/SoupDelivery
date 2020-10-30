import React, { useState } from 'react';
import styled from 'styled-components';
import CheckOutProgressMain from '../../components/CheckOutProgress/CheckOutProgressMain';
import NextBtn from '../../components/Buttons/NextBtn';
import { useLocalState, useLocalStorage } from '../Hooks/UseLocalState';
import { useHistory } from "react-router-dom";
import TimeIcone from '../Icone/time';
import MapPin from '../Icone/MapsPin';


const MainWrapper = styled.div`
display:flex;
flex-direction:column;
width:100%;

`;

const ContentContainer = styled.div`
display:${props => props.DeliveryType ? 'flex' : 'none'};
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
margin-top:3rem;

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
font-weight:700;
color:#707070;
margin-bottom:0rem;
`;

const StyledP = styled.p`
margin-top:0rem;
margin-bottom:0rem;
color:red;
`;

const ContentContainerPickup = styled.div`

display:${props => !props.DeliveryType ? 'flex' : 'none'};

justify-content:flex-start;
align-items:flex-start;
flex-direction:column;
margin-left:4rem;
width:80%;
margin-top:5rem;
`;

const TimeContainer = styled.div`
padding-right:1rem;
`;

const Div = styled.div`
flex-direction:row;
display:flex;
justify-content:center;
text-align:center;
`;

const Styledh2 = styled.h2`
margin-top:1rem;
font-size:1.6rem;
font-weight:400;
color:#707070;
margin-bottom:0rem;
margin-left:3.8rem;
`;


const BorderUnderlinePickup = styled.div`
margin-bottom:1rem;
margin-top:1.5rem;
width:100%;
height:0.1rem;
background-color:#dedede;
`;


const DivTime = styled.div`
flex-direction:row;
display:flex;
justify-content:center;
text-align:center;
margin-top:2rem;
`;



const StyledPickUpH2 = styled.h2`
margin-top:2rem;
font-size:1.7rem;
font-weight:700;
color:#707070;
margin-bottom:0rem;
`;


const CheckOutProgressAddres = (props) => {


    const [longAddress, setLongAdress] = useLocalState('longAddress');
    const [localCreds, setLocalCreads] = useLocalStorage('creads');
    const [localActive, setLocalActive] = useLocalStorage('delivery', true)
   

    const [creds, setCreds] = useState({ firstName: localCreds ? localCreds.firstName : null, lastName: localCreds ? localCreds.lastName : null, address: longAddress, email: localCreds ? localCreds.email : localCreds });
    const [error, setError] = useState('');



    let history = useHistory();

    const errorMessage = {
        firstName: 'Du behöver fylla i alla fälten.',
        email: 'Du behöver fylla i din mejl',

    }




    const handleSubmit = (e) => { 
        e.preventDefault();
        let letters = /^[A-Za-z]+$/;

        const firstName = creds.firstName
        const lastName = creds.lastName
        const address = creds.address
        const email = creds.email

        if ((firstName && firstName.length === 0) || firstName.match(letters) == null) {
            setError(errorMessage.firstName)
         

        } else if ((lastName && lastName.length === 0) || lastName.match(letters) == null) {

            setError(errorMessage.firstName)
        
        } else if (address && address.length === 0) {
       
            setError(errorMessage.firstName)

        } else if (email && email.length === 0) {

            setError(errorMessage.firstName)
      
        }
        else {
            setError('')
        
            let Cre = creds;
            setLocalCreads(Cre);
            history.push('/ShoppingCartPayment')


        }
    }


    const onChangeInputHandler = (e) => {


        const { name, value } = e.target;
        setCreds({ ...creds, [name]: value })

    }





    return (
        <MainWrapper>

            <CheckOutProgressMain page={2} />


            <ContentContainer DeliveryType={localActive}>



                <InputContainer>
                    <StyledH2>Förnamn</StyledH2>
                    <Input type="firstName" name="firstName" placeholder={creds.firstName} onChange={onChangeInputHandler} />

                    <BorderUnderline />

                </InputContainer>

                <InputContainer>
                    <StyledH2>Efternamn</StyledH2>
                    <Input type="lastName" name="lastName" placeholder={creds.lastName} onChange={onChangeInputHandler} />
                    <BorderUnderline />

                </InputContainer>


                <InputContainer>
                    <StyledH2>Adress</StyledH2>
                    <Input type="address" name="address" placeholder={creds.address} onChange={onChangeInputHandler}></Input>
                    <BorderUnderline />
                </InputContainer>




                <InputContainer>
                    <StyledH2>Mejladress</StyledH2>
                    <Input type="email" name="email" placeholder={creds.email} onChange={onChangeInputHandler}></Input>
                    <BorderUnderline />
                </InputContainer>
                <StyledP>{error}</StyledP>

            </ContentContainer>



            <ContentContainerPickup DeliveryType={localActive}>


                <InputContainer>
                    <StyledH2>Förnamn</StyledH2>
                    <Input type="firstName" name="firstName" placeholder={creds.firstName} onChange={onChangeInputHandler} />

                    <BorderUnderline />

                </InputContainer>

                <InputContainer>
                    <StyledH2>Efternamn</StyledH2>
                    <Input type="lastName" name="lastName" placeholder={creds.lastName} onChange={onChangeInputHandler} />
                    <BorderUnderline />

                </InputContainer>

                <InputContainer>
                    <StyledH2>Mejladress</StyledH2>
                    <Input type="email" name="email" placeholder={creds.email} onChange={onChangeInputHandler}></Input>
                    <BorderUnderline />
                </InputContainer>
                <StyledP>{error}</StyledP>



                <StyledPickUpH2>Avhämtning</StyledPickUpH2>
                <BorderUnderlinePickup />
                <Div><MapPin /> <StyledH2>Eight Soups</StyledH2></Div>
                <Styledh2>Odengatan 92</Styledh2>
                <Styledh2>113 22 Stockholm</Styledh2>
                <BorderUnderlinePickup />

                <DivTime><TimeContainer><TimeIcone /></TimeContainer><StyledH2>Upphämtningstid: 15-20 min</StyledH2></DivTime>

            </ContentContainerPickup>




            <NextBtnContainer onClick={handleSubmit} ><NextBtn /></NextBtnContainer>
        </MainWrapper>
    )
}


export default CheckOutProgressAddres;

