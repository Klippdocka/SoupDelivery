import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import CloseIcone from '../../components/Icone/CloseIcone';
import Items from '../../components/SoupService/SoupService'
import Soup from '../../components/Soup/Soup';

const ModalContainer = styled.div`
position:fixed;
display:flex;
height:100%;
width:100%;
justify-content:center;
align-items:center;
background:rgba(79,79,79,0.4);
overflow-y:hidden;
z-index:10;
display: ${props => props.modalOpen ? 'block' : 'none'};

`;



const AddSoupCard = styled.div`

position:relative;
top:0rem;
left:0rem;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:60rem;
width:40rem;
background-color:#ffffff;
margin-top:10rem;
margin-left:45rem;
z-index:10;






@media screen and (max-width: ${theme.screenSize.small}){
  margin-left:1.5rem;
   width:34rem;
}

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

const TitleContainer = styled.h1`
display:flex;
flex-direction:row;
align-items:center;
height:4rem;
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
height:10rem;
width:100%;
`;




const OptionsItems = styled.div`
background-color:black;
width:100%;
height:10rem;
`;

const TitleGrey = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
color:#656565;
height:5rem;
width:100%;
`;
const StyledH3 = styled.h3`

color:#656565;
height:5rem;
width:100%;
margin-block-start: 0em;
margin-block-end: 0em;

`;




const AddSoup = (props) => {

   


return(


   <ModalContainer modalOpen={props.openItem != null}>
<AddSoupCard>

<ImgContainer image={props.openItem.image}> 

<CloseIconeContainer onClick={props.toggle}> 
<StyledCloseIcone><CloseIcone/></StyledCloseIcone>
</CloseIconeContainer>
</ImgContainer>
   
     
       

<TitleContainer><Title>{props.openItem.title}</Title>
<Price>{props.openItem.price} Kr</Price></TitleContainer>


    <TitleGrey><StyledH3>Välj tillbehör (obligatoriskt)</StyledH3></TitleGrey>

   <Options>
       <OptionsItems>

       </OptionsItems>
   </Options>



</AddSoupCard>

</ModalContainer>
  
    
    
    
    )



}


export default AddSoup;