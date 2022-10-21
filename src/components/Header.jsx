import React from 'react'
import PokeLogo from '../statics/pokelogo.svg'
import Menu from './Menu'
import styled from 'styled-components'

function Header() {
    return ( 
      <>
     <Menu/>
      <Container >
        <Image  src={PokeLogo} alt="logo-pokemon" />
      </Container>
      </>
     );
}

export default Header;

const Container = styled.div`
  display:flex;
  flex-direction:column;
  margin: 20px 0px 20px
`;

const Image = styled.img`
  display: flex;
  height: 100px;
  margin: 0px;
  @media (max-width: 500px) {
    height: 60px;
  }
`;