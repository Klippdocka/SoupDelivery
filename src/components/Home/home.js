import React from 'react';
import { MainWrapper, ImgContainer, HomeImg, PositionContainer } from './styledHome';
import Soup5 from '../Images/Soup5.jpg';
import Position from '../Position/position'
import Logo from '../../components/Icone/Loggo';
import styled from 'styled-components';





const LogoContainer = styled.div`
display:flex;
position:absolute;
justify-content:flex-end;
height:4.5rem;
width:100%;
margin-top:4rem;
margin-right:4rem;


`;

const Home = (props) => {


    return (

      <MainWrapper>
        <ImgContainer>
        <LogoContainer>
        <Logo/>
        </LogoContainer>
          <HomeImg src={Soup5} />
        </ImgContainer>

        <PositionContainer>
          <Position />
        </PositionContainer>



      </MainWrapper>

    )

  }



export default Home;