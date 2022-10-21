import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function NotFavoriteState() {
    return ( 
    <Text>
        Parece que aun no tienes favoritos, puedes agregar nuevos <Enalce to="/">aqui</Enalce> 
    </Text> 
    );
}

export default NotFavoriteState;

const Text = styled.p`
width: 80%;  
color: white;
text-align: center;
`;

const Enalce = styled(Link)`
  text-decoration: none;
  color:#ffcb05;
`;