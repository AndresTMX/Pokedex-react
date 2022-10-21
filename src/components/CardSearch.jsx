import React from 'react';
import styled from 'styled-components';

function CardSearch({name, img, types, id}) {
    return ( 
        <div key={id}>
            <ItemPokemon>{name}</ItemPokemon>
            <img src={img} alt={name}/>
        </div>
     );
}

export default CardSearch;

const ItemPokemon = styled.span`
  display:flex;
  background-color: white;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  font-weight: 500;
`;
