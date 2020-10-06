import React from 'react';
import styled from 'styled-components';
import BasketIcone from '../../components/Icone/basketIcone';
import PlacePin from '../../components/Icone/MapsPin';
import CreditCard from '../../components/Icone/CreditCart';


const MainWrapper = styled.div`

height:100%;
width:100%;
`;


const ProgressBar = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    
    height:10rem;
`;


const BasketContiner = styled.div`
display:flex;
align-items:baseline;
width:100%;
justify-content:space-around;

`;



const ProgressLineWrapper=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
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
            <BasketIcone/>
            <PlacePin/>
            <CreditCard/>
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