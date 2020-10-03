import styled from 'styled-components';
import theme from '../../theme';


const MainWrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;


`;




const ImgContainer = styled.div`
display:flex;
justify-content:center;
width:100%;
height:100%;
`;

const HomeImg = styled.img`
width:100%; 
height:100%;
object-fit:cover;
position:static;





@media screen and (max-width: ${theme.screenSize.small}){
height:100%;
 

}

`;

const PositionContainer = styled.div`
display:flex;
position:absolute;
justify-content:center;
height:5rem;
width:100%;
margin-top:55rem;



@media screen and (max-width: ${theme.screenSize.xsmall}){
margin-top:65rem;

 

}

`;


export { MainWrapper, ImgContainer, HomeImg, PositionContainer };