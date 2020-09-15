import React from 'react';
import { MainWrapper, ImgContainer, HomeImg, PositionContainer } from './styledHome';
import Soup1 from '../Images/Soup1.jpg';
import Position from '../Position/position'
import Navbar from '../../components/Navbar/navbar';
import Drawer from '../../components/Drawer/drawer';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isMenuOpen: false };
  }

  handler() {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }));
  }

  render() {

    return (

      <MainWrapper>

        <Navbar isMenuOpen={this.state.isMenuOpen} handler={this.handler.bind(this)} />
        <Drawer isMenuOpen={this.state.isMenuOpen}/>
        <ImgContainer>
          <HomeImg src={Soup1} />
        </ImgContainer>

        <PositionContainer>
          <Position />
        </PositionContainer>



      </MainWrapper>

    )

  }
}


export default Home;