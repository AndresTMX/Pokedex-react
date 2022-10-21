import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails, getHabilitiesPokemon, getLocationPokemon } from "../api";

const initialState = {
    pokemons: [],
    resultsSeaching: [],
    pokemonsPaginados: [],
    page: 1,
    abilities: [],
    locationPokemons: [],
};

//llamado a la api
export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {

        const pokemonRes = await getPokemon();
        const pokemonsDetaild = await Promise.all(
            pokemonRes.map((pokemon) => getPokemonDetails(pokemon))
        );

        dispatch(setPokemons(pokemonsDetaild));
    }
);

//llamado a las habilidades de los pokemons
export const fetchPokemonsWithHabilities = createAsyncThunk(
    'data/fetchPokemonsWithHabilities',
    async (_, { dispatch }) => {

        const pokemonRes = await getPokemon();
        const pokemonsDetaild = await Promise.all(
            pokemonRes.map((pokemon) => getPokemonDetails(pokemon))
        );

        const arrayAbilities = pokemonsDetaild.map((pokemon) => pokemon.abilities);

        const abiltiesPokemon = arrayAbilities.map((array) =>
            array.map((abilitie) => {
                return abilitie.ability.name;
            }));

        const text = abiltiesPokemon.toString().split(",");

        const uniqueAbilities = text.filter((item, index) => {
            return text.indexOf(item) === index;
        });

        const pokemonAbilities = await Promise.all(
            uniqueAbilities.map((ability) => getHabilitiesPokemon(ability))
        );

        dispatch(setHabilities(pokemonAbilities))

    }
);

export const fetchLocationPokemon = createAsyncThunk(
    'data/fetchLocationPokemon',
    async (url, { dispatch } ) => {

        const dataLocation = await getLocationPokemon(url);

        dispatch(setLocation(dataLocation))

    }
)


export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {

            const pokemonsPaginados = state.pokemons.slice(0, 12);

            let newState = { ...state, pokemons: action.payload, pokemonsPaginados: pokemonsPaginados }

            return newState

        },
        setSearch: (state, action) => {

            if (action.payload) {
                let searcher
                searcher = state.pokemons.filter((pokemon) => pokemon.name.includes(action.payload))
                return { ...state, resultsSeaching: searcher }

            } else {
                //vaciar buscador
                return { ...state, resultsSeaching: [] };
            }
        },
        setFavorite: (state, action) => {

            //filtro para obtener la posicion del pokemon en el array pokemons
            const currentPokemonIndex = state.pokemonsPaginados.findIndex(
                (pokemon) => {
                    return pokemon.id === action.payload.pokemonId;
                });

            const currentPokemonIndexOriginal = state.pokemons.findIndex(
                (pokemon) => {
                    return pokemon.id === action.payload.pokemonId;
                });

            //filtro para chequear si el pokemon ya esta marcado como favorito
            const pokemonFilterFavorite = state.pokemonsPaginados[currentPokemonIndex].favorite === true;

            const pokemonFilterFavoriteOriginal = state.pokemons[currentPokemonIndexOriginal].favorite === true;

            //si el id del pokemon es > = 0 y el filtro de repeticion devuelve falso
            if (currentPokemonIndex >= 0 && !pokemonFilterFavorite) {

                let newStatePokemonPaginado = { ...state.pokemonsPaginados[currentPokemonIndex], favorite: true }
                state.pokemonsPaginados[currentPokemonIndex] = newStatePokemonPaginado

            } else {

                const isFavPaginados = state.pokemonsPaginados[currentPokemonIndex].favorite
                state.pokemonsPaginados[currentPokemonIndex].favorite = !isFavPaginados

            }

            if (currentPokemonIndexOriginal > 0 && !pokemonFilterFavoriteOriginal) {

                let newStatePokemonOriginal = { ...state.pokemons[currentPokemonIndexOriginal], favorite: true }
                state.pokemons[currentPokemonIndexOriginal] = newStatePokemonOriginal

            } else {

                const isFavOriginal = state.pokemons[currentPokemonIndexOriginal].favorite
                state.pokemons[currentPokemonIndexOriginal].favorite = !isFavOriginal
            }

        },
        NotFavorite: (state, action) => {

            let id = action.payload.pokemonId;

            const currentPokemonIndex = state.pokemons.findIndex(
                (pokemon) => {
                    return pokemon.id === id;
                }
            );

            let newStatePokemonOriginal = { ...state.pokemons[currentPokemonIndex], favorite: false }
            state.pokemons[currentPokemonIndex] = newStatePokemonOriginal

        },
        nextPage: (state, action) => {

            let pokemonsCargados = 12

            let currentPage = state.page * pokemonsCargados

            let nextPage = currentPage + pokemonsCargados;

            const pokemonsPaginados = state.pokemons.slice(currentPage, nextPage);

            const newState = { ...state, pokemonsPaginados: pokemonsPaginados, page: state.page + 1 };

            return newState
        },
        prevPage: (state, action) => {

            let pokemonsCargados = 12

            let PokemonsLoad = state.page * pokemonsCargados

            let prevPage = PokemonsLoad - pokemonsCargados

            const pokemonsPaginados = state.pokemons.slice(prevPage - pokemonsCargados, prevPage);

            const newStated = { ...state, pokemonsPaginados: pokemonsPaginados, page: state.page - 1 };

            return newStated

        },
        setHabilities: (state, action) => {

            let newState = { ...state, abilities: action.payload }

            return newState

        },
        setLocation: (state, action) => {

           state.locationPokemons = action.payload;
            
        }
    }
});

export const { setPokemons, setFavorite, NotFavorite, setSearch, nextPage, prevPage, setHabilities, setLocation } = dataSlice.actions;

export default dataSlice.reducer;

