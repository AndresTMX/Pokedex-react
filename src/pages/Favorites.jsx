import React from "react";
import Header from "../components/Header";
import NotFavoriteState from "../components/NotFavoriteState";
import CardFavorite from "../components/CardFavorite";
import styled from "styled-components";
//redux
import { useSelector } from "react-redux";

function Favorites() {
  const pokemons = useSelector((state) => state.data.pokemons);

  const pokemonsFavoritos = pokemons.filter(
    (pokemon) => pokemon.favorite === true
  );

  return (
    <div className="App">
      <Header />
      <TextDescription>
        Bienvenido a tu coleccion, aqui encontraras tus pokemons favoritos y
        podras ver mas de sus caracteristicas
      </TextDescription>
      {!pokemonsFavoritos.length && <NotFavoriteState />}
      <ContainerFavorites>
        {pokemonsFavoritos.map((pokemon) => (
          <CardFavorite
            key={pokemon.name}
            name={pokemon.name}
            id={pokemon.id}
            img={pokemon.sprites.front_default}
            types={pokemon.types}
            favorite={pokemon.favorite}
            abilities={pokemon.abilities}
            sprites={pokemon.sprites}
            location={pokemon.location_area_encounters}
          />
        ))}
      </ContainerFavorites>
    </div>
  );
}

export default Favorites;

const ContainerFavorites = styled.div`
  display: grid;
  place-items: center;
  width: 1000px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  @media (max-width: 1100px) {
    width: 700px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 750px) {
    width: 500px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TextDescription = styled.span`
  display: flex;
  color: whitesmoke;
  padding: 30px;
  width: auto;
`;
