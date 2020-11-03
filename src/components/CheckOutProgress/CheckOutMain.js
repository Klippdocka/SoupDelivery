import React from 'react';
import styled from 'styled-components/macro';
import BackPin from '../../components/Icone/BackIcon';
import { withRouter } from 'react-router-dom';


const MainWrapper = styled.div`
height:100%;
width:100%;
`;



const StyledDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:100%;
height:8rem;
margin-top:1.5rem;
`;

const BackPinContainer = styled.div`
display:flex;
left:0rem;
margin-left:2rem;
position:absolute;






`;

const TitleContainer = styled.div`
position:absolute;



`;

const Title = styled.h1`
margin-top:0rem;
color:#656565;
font-size:2.3rem;
font-weight:300;
`;








const CheckOutMain = (props) => {


const ProgressTitle = (pageTitle) => {

    if(pageTitle == 1){
        return 'Din varukorg';
    }
    else if(pageTitle == 2){
        return 'Leveransdetaljer';
    }
    else if(pageTitle == 3) {
        return 'Betalning';
    } else if(pageTitle == 4){
        return 'Din beställning'
    }

};

   


    return(

         <div>
        <MainWrapper>


            <StyledDiv>
            <BackPinContainer onClick={() => props.history.goBack()}><BackPin/></BackPinContainer>
    <TitleContainer> <Title>{ProgressTitle(props.pageTitle)}</Title></TitleContainer>
            </StyledDiv>

            </MainWrapper>

            {props.children}
            </div>
           

       
           
       

       
        
    )

    
};


export default withRouter(CheckOutMain);