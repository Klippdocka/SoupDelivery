import React, { useState } from 'react';
import styled from 'styled-components';
import PlacePin from '../Icone/placePin';
import { withRouter } from 'react-router-dom';
import theme from '../../theme';
import PlacesAutocomplete from 'react-places-autocomplete';
import { useLocalState } from '../Hooks/UseLocalState';
import { useHistory } from "react-router-dom";




const MainWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:55%;
height:6rem;
opacity:0.8;
border-radius:2.5rem;
background-color:white;



@media screen and (max-width: ${theme.screenSize.small}){
   width:95%;
   height:5rem;
}

`;

const PlacePinContainer = styled.div`
flex:1;
justify-content:center;
align-items:center;
text-align:center;



`;

const AddressContainer = styled.div`
flex:4;
width:50rem;
height:5rem;
border-radius:2.5rem;
position:relative;
justify-content:start;
align-items:center;
@media screen and (max-width: ${theme.screenSize.small}){

   width:70%;
}


`;


const InputAddress = styled.input`
width:90%;
height:5rem;
font-size:2rem;
border-radius:2.5rem;
border:none;

align-items:center;
justify-content:center;

cursor: pointer;


&::placeholder{
    color:#6c6c6c;

}
@media screen and (max-width: ${theme.screenSize.small}){
   height:4rem;
   width:80%;
   margin-top:0.4rem;
}

`;

const DropDownStyle = styled.div`
width:auto;
opacity:1;
width:40rem;
font-size:2rem;


@media screen and (max-width: ${theme.screenSize.small}){
   width:80%;
}

`;


const InputWrapper = styled.div` 
    cursor: pointer; 
`;





const Position = () => {

    let history = useHistory();


    const [address, setAddress] = useLocalState('address');
    const [longAddress, setLongAdress] = useLocalState('longAddress');

    const handleSelect = async (value) => {

        let fullAddress = value;
        setLongAdress(fullAddress);
        

        
        let splitted = value.split(",")
        
        let result;

        if (splitted.length > 0) {
            result = splitted[0]
        } else { 
            result = value
        }

        setAddress(result);
        history.push('/SoupMenu');


    };

    return (

        <MainWrapper>

            <PlacePinContainer>
                <PlacePin />
            </PlacePinContainer>


            <AddressContainer>

                <PlacesAutocomplete
                    value={address}
                    onChange={setAddress}
                    onSelect={handleSelect}>


                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (

                        <InputWrapper>
                            <InputAddress {...getInputProps({ placeholder: "Ange din adress" })} />

                            <div>
                                {loading ? <div>...Laddar</div> : null}

                                {suggestions.map(suggestion => {
                                    const style = {
                                        backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                    };



                                    return (
                                        <DropDownStyle  {...getSuggestionItemProps(suggestion, { style })}>
                                            {suggestion.description}


                                        </DropDownStyle>
                                    );

                                })}

                            </div>
                        </InputWrapper>


                    )}

                </PlacesAutocomplete>


            </AddressContainer>

        </MainWrapper>

    );

};




export default withRouter(Position);