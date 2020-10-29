import React from 'react';
import styled from 'styled-components';
import BasketIcone from '../../components/Icone/basketIcone';
import PlacePin from '../../components/Icone/MapsPin';
import CreditCard from '../../components/Icone/CreditCart';
import theme from '../../theme';

const MainWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:100%;
width:100%;
`;


const ProgressBar = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    height:10rem;
    width:100%;

    @media screen and (min-width: ${theme.screenSize.small}){
 
  width:60%;
  }
`;


const BasketContiner = styled.div`
display:flex;
align-items:baseline;
width:100%;
justify-content:space-around;

`;



const ProgressLineWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;

@media screen and (min-width: ${theme.screenSize.small}){
  
  width:60%;
  }
`;

const ProgressLineContainer = styled.div`
width:95%;
height:0.5rem;
background-color:#f5f5f5;
border-radius:2rem;
display:flex;
`;


const ProgressLineGreen = styled.div`
display:flex;
border-radius:2rem;
width:${props => props.progress + "%"};
background-color:#9ab54a;
`;

const Ptag = styled.p`
font-size:1rem;
font-weight:400;
margin-left:0rem;
color:#23591e;
//color:#656565;
`;

const TextContiner = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;


const CheckOutProgressMain = (props) => {



const progressFunction = (page) => {

    if(page == 1){
        return 33;
    }
    else if(page == 2){
        return 66;
    }
    else {
        return 100;
    }

}


    return(

        <MainWrapper>

        <ProgressBar>
        <BasketContiner>
        <TextContiner><BasketIcone/>
            <Ptag>Varukorg</Ptag></TextContiner> 
          <TextContiner> <PlacePin/>
          <Ptag>Leveransdetaljer</Ptag></TextContiner> 
          <TextContiner><CreditCard/><Ptag>Betalning</Ptag></TextContiner>
            
       </BasketContiner>

       
        </ProgressBar>
        
<ProgressLineWrapper>
<ProgressLineContainer>
<ProgressLineGreen  progress={progressFunction(props.page)}></ProgressLineGreen>
</ProgressLineContainer>
</ProgressLineWrapper>
     

       

        </MainWrapper>

    )

    
};


export default CheckOutProgressMain;