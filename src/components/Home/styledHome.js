import styled from 'styled-components/macro';
import theme from '../../theme';


const MainWrapper = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
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


@media screen and (max-width: ${theme.screenSize.xsmall}){

}

`;


export { MainWrapper, ImgContainer, HomeImg, PositionContainer };