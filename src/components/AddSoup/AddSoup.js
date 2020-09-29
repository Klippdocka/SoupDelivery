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
background-color:#ffffff;
width:100%;
height:10rem;
`;

const TitleGrey = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
background-color:#f5f5f5;
height:4.5rem;
width:100%;
`;
const StyledH3 = styled.h3`
margin-left:3rem;
color:#656565;
width:100%;
margin-block-start: 0em;
margin-block-end: 0em;

`;

const StyledInputContainer = styled.div`
display:flex;
justify-content:flex-start;
flex-direction:column;
text-align:row;
margin-left:1.8rem;
`



const InputContainer = styled.div`
flex-direction:row;
margin-top:1rem;
`;

const AddSoup = (props) => {


    const [checkbox, setCheckbox] = useState ({
        isAgree : false, 
        value : ""
    })


    const handleChange = (event) => {
        const target = event.target
        const name = target.name
        const value = target.value
        setCheckbox({
            ...checkbox,
            [name] : value
        })
        
    }

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
       
            <StyledInputContainer>

                <InputContainer>
                <input type="checkbox" name="value" value="Surdegsbröd" onChange={handleChange} checked={checkbox.value =="Surdegsbröd"}/>
                <lable> SurdegsBröd </lable>
                </InputContainer>

              <InputContainer>  <input type="checkbox" name="value" value="Mörkt bröd" onChange={handleChange} checked={checkbox.value =="Mörkt bröd"}/>
                <lable> Mörkt bröd </lable>
                </InputContainer>

                <InputContainer>
                <input type="checkbox" name="value" value="Foccacia" onChange={handleChange} checked={checkbox.value =="Foccacia"}/>
                <lable> Focaccia </lable>
                </InputContainer>

                </StyledInputContainer>
        
       </OptionsItems>
   </Options>

   <TitleGrey><StyledH3>Välj dryck</StyledH3></TitleGrey>

   <Options>
       <OptionsItems>
       <StyledInputContainer>

        <InputContainer>
            <input type="checkbox" name="value" value="San Pellegrino" onChange={handleChange} checked={checkbox.value =="San Pellegrino"}/>
            <lable> San Pellegrino </lable>
            </InputContainer>

            <InputContainer>  <input type="checkbox" name="value" value="CitronVatten" onChange={handleChange} checked={checkbox.value =="CitronVatten"}/>
            <lable> CitronVatten </lable> 
            </InputContainer>

            <InputContainer>
            <input type="checkbox" name="value" value="Cola zero" onChange={handleChange} checked={checkbox.value =="Cola zero"}/>
            <lable> Cola zero </lable> 
            </InputContainer>

            </StyledInputContainer>
                </OptionsItems>
   </Options>



</AddSoupCard>

</ModalContainer>
  
    
    
    
    )



}


export default AddSoup;