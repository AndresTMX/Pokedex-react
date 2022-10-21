import React, { useEffect, useState } from "react";
//components
import Header from "../components/Header";
import Searcher from "../components/Searcher";
import ContainerCard from "../components/ContainerCards";
import Card from "../components/Card";
import ContentButton from "../components/ContentButton";
import NoResults from "../components/NoResults";
import LoadingState from "../components/LoadingState";
import ContainerSearch from "../components/ContainerSearch";
import Button from "../components/Button";
import "../App/App.css";
//use pokeredux
import { useSelector, useDispatch, shallowEqual } from "react-redux";
//actions redux
import {
  fetchPokemonsWithDetails,
  nextPage,
  prevPage,
  fetchPokemonsWithHabilities,
  fetchLocationPokemon,
} from "../Slices/dataSlice";
import { setLoading } from "../Slices/uiSlice";
//hook de busqueda
import { useSearcher } from "../Hooks/useSearcher";
//modal
import Modal_1 from "../modals/Modal_1";
import MessageModal from "../components/MessageModal";

function Home() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  const abilities = useSelector((state) => state.data.abilities, shallowEqual);
  const loading = useSelector((state) => state.ui.loading);
  const searching = useSelector((state) => state.data.resultsSeaching);
  const pokemonsPaginados = useSelector(
    (state) => state.data.pokemonsPaginados
  );
  const page = useSelector((state) => state.data.page);

  const dispatch = useDispatch();

  const { searchValue, setSearchValue } = useSearcher();
  const [showModal, setShowModal] = useState(false);

  const next = () => {
    page <= 12 ? dispatch(nextPage()) :  setShowModal(!showModal);
  };

  const prev = () => {
    page > 1 ? dispatch(prevPage()) : setShowModal(!showModal);
  };

  useEffect(() => {
    if (!pokemons.length && !abilities.length) {
      setTimeout(() => {
        dispatch(setLoading(true));
        dispatch(fetchPokemonsWithDetails());
        dispatch(fetchPokemonsWithHabilities());
        dispatch(setLoading(false));
      }, 3000);
    } else {
      dispatch(nextPage());
      dispatch(prevPage());
    }
  }, []);

  const dataRender = searching.length > 0 ? searching : pokemonsPaginados;

  return (
    <div className="App">
      <Header />
      <Searcher searchValue={searchValue} setSearchValue={setSearchValue} />

      <ContentButton>
        <Button text={"Anterior"} action={prev} />

        <Button text={"Siguiente"} action={next} />
      </ContentButton>

      {!loading && !pokemons.length && <LoadingState />}

      {!loading && !!searching.length && (
        <ContainerSearch searching={searching} />
      )}

      {!pokemons.includes(searchValue) && searching.length === 0 && (
        <NoResults busqueda={searchValue} />
      )}

      {showModal && (
        <Modal_1>
          <MessageModal
            Message={`Se encuentra en la ${(page > 1)? 'ultima':'primera' } pagina`}
            State={showModal}
            SetState={setShowModal}
          />
        </Modal_1>
      )}

      <ContainerCard page={page}>
        {dataRender.map((pokemon) => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            id={pokemon.id}
            img={pokemon.sprites.front_default}
            types={pokemon.types}
            favorite={pokemon.favorite}
          />
        ))}
      </ContainerCard>

      <ContentButton>
        <Button text={"Anterior"} action={prev} />

        <Button text={"Siguiente"} action={next} />
      </ContentButton>
    </div>
  );
}

export default Home;
