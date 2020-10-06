import React from 'react';
import styled from 'styled-components';
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


   


    return(

         <div>
        <MainWrapper>


            <StyledDiv>
            <BackPinContainer onClick={() => props.history.goBack()}><BackPin/></BackPinContainer>
            <TitleContainer> <Title> Din varukorg</Title></TitleContainer>
            </StyledDiv>

            </MainWrapper>

            {props.children}
            </div>
           

       
           
       

       
        
    )

    
};


export default withRouter(CheckOutMain);