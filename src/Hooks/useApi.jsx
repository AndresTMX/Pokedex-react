import React, { useEffect, useState } from "react";
import { getPokemon } from "../api";

function useApi(){

const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };

    fetchPokemon();
  }, []);


  return {
    pokemons,
    setPokemons,
  }

}

export {useApi}