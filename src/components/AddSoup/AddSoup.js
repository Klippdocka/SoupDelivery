import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import CloseIcone from '../../components/Icone/CloseIcone';


const ModalContainer = styled.div`
position:fixed;
display:flex;
height:100%;
width:100%;
justify-content:center;
align-items:center;
background:rgba(255,255,255,0.3);
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
height:60rem;
width:35rem;
background-color:white;
margin-top:10rem;
margin-left:40rem;
z-index:10;
box-shadow: 5px 6px 0px -1px rgba(0,0,0,0.04);




@media screen and (max-width: ${theme.screenSize.small}){
   margin-left:5rem;
   width:28rem;
}

`;






const AddSoup = (props) => {


return(


   <ModalContainer modalOpen={props.modalOpen}>
<AddSoupCard>
    <ImgContainer/>
    <CloseIcone/>
   <Title/>
   <Options>
       <OptionsItems>
           
       </OptionsItems>
   </Options>


<p>Hej</p>
</AddSoupCard>

</ModalContainer>
  
    
    
    
    )



}


export default AddSoup;