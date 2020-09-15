import React from 'react';
import styled from 'styled-components';
import PlacePin from '../Icone/placePin';
import { withRouter } from 'react-router-dom';
import theme from '../../theme';

const MainWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:55%;
height:6rem;
background-color:white;
opacity:0.8;
border-radius:2.5rem;



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
flex:5;


`;


const InputAddress = styled.input`
width:90%;
height:100%;
font-size:2rem;
border-radius:2.5rem;
border:none;
&::placeholder{
    color:#6c6c6c;

}
@media screen and (max-width: ${theme.screenSize.small}){
   height:4rem;
}

`;


class Position extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            inputValue: ""
        };

    }

    



    render() {

    return (

      <MainWrapper>
         
        <PlacePinContainer>
             <PlacePin/>
         </PlacePinContainer>


        <AddressContainer>
           

            <InputAddress
            placeholder="Ange din adress" type="text" ></InputAddress>
        
        </AddressContainer>

      </MainWrapper>

        )
    }
}


export default  withRouter(Position);