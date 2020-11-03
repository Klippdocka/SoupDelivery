import React from 'react';
import styled from 'styled-components/macro';
import theme from '../../theme';
import { withRouter } from 'react-router-dom';
import ForwardIcon from '../../components/Icone/ForwardIcon';


const MainContainer = styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;
`;


const BtnContainer = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
background-color:#9ab54a;

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


const IconeHolder = styled.div`
width:3rem;
display:flex;
justify-content:flex-end;
align-items:baseline;

`;



const NextBtn = () => {

    
        return (
            <MainContainer>

                <BtnContainer>
                   
                   <BtnTitle>Nästa</BtnTitle>
                    <IconeHolder><ForwardIcon/></IconeHolder>
                </BtnContainer>
            </MainContainer>


        )
    

}

export default withRouter(NextBtn);