import React from 'react';
import { MainWrapper, ImgContainer, HomeImg, PositionContainer } from './styledHome';
import Soup1 from '../Images/Soup1.jpg';
import Position from '../Position/position'


const Home = () => {


    return (

      <MainWrapper>

        <ImgContainer>
          <HomeImg src={Soup1} />
        </ImgContainer>

        <PositionContainer>
          <Position />
        </PositionContainer>



      </MainWrapper>

    )

  }



export default Home;