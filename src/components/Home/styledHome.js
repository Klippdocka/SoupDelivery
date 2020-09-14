import styled from 'styled-components';
import theme from '../../theme';


const MainWrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
flex-direction:column;
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
z-index:-1;
position:absolute;





@media screen and (max-width: ${theme.screenSize.small}){
height:100%;
 

}

`;

const PositionContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:30rem;
`;


export { MainWrapper, ImgContainer, HomeImg, PositionContainer };