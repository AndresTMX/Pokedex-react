import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function Menu() {
    return ( 
        <MenuContainer>
        <Enlace to="/">Pokedex</Enlace>
        <Enlace to="/favorites">Pokemons Favoritos</Enlace>
        </MenuContainer>
     );
}

export default Menu;

const MenuContainer = styled.div`
display: flex;
width: 100%;
align-items : center;
justify-content: space-around;
font-weight: 600;
background-color: #343483;
padding-top: 20px;
padding-bottom: 20px;
margin-bottom: 20px;
border-bottom: 2px solid #ffcb05;
`;

const Enlace = styled(Link)`
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  :hover{
    color: #ffcb05;
  }
`;