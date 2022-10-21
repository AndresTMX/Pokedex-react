import React from "react";
import styled from "styled-components";
import CardSearch from "./CardSearch";

function ContainerSearch({ searching }) {


  return (
    <Container>
      <StateSeaching>Podrias estar buscando...</StateSeaching>

      <ContainerItems>
        {
          searching.map((pokemon) => (
            <CardSearch 
            key={pokemon.id}
            id={pokemon.name}
            name={pokemon.name}
            img={pokemon.sprites.front_default}
            types={pokemon.types}
            />
          ))
        }
      </ContainerItems>
    </Container>
  );
}

export default ContainerSearch;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-width:40%;
  max-width: 1500px;
  margin: 20px;
`;

const StateSeaching = styled.span`
color: white;
font-weight: 600;
font-size: 1rem;
  
`;
