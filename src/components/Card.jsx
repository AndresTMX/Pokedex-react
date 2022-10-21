import React , {useState} from "react"
import ButtonFav from "./ButtonFav"
import styled from "styled-components"
//redux
import { useDispatch } from 'react-redux'
import { setFavorite } from '../Slices/dataSlice'
//modal
import Modal_1 from "../modals/Modal_1"
import Confirmed from "../components/Confirmed"

function Card({name, img, id, favorite, types, }) {

  const dispatch = useDispatch();

  const dataPokemon = {name:name, pokemonId:id, favorite:favorite}
  const [modalFavorite, setModalFavorite] = useState(false);
  
  const tiposPokemon = types
    .map((element) => element.type.name)
    .join(", ");

    const handleOnFavorite = () => {
      dispatch(setFavorite(dataPokemon));
      setModalFavorite(!modalFavorite);
    }
    
  return (
    <ContainerCard>
      <Header>
        <Text>{name}</Text>
        <ButtonFav Isfavorite={favorite} onClick={handleOnFavorite} /> 
      </Header>

      <picture>
        <ImagePokemon src={img} alt={name} />
      </picture>

      <ContainerFooter>
        <span>Type's: {tiposPokemon}</span>
      </ContainerFooter>

      {modalFavorite && 
      (<Modal_1>
        <Confirmed modalFavorite={modalFavorite} setModalFavorite={setModalFavorite} favorite={favorite}/>
      </Modal_1>)}

    </ContainerCard>
  );
}

export default Card;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  background-color: #f5f5f530;
  backdrop-filter: blur(4px);
  box-shadow: -1px 8px 10px 2px rgba(0, 0, 0, 0.171);
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  justify-content: space-between;
  width: 100%;
`;

const Text = styled.span`
  display: flex;
`;

const ImagePokemon = styled.img`
  height: 200px;
`;

const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  color: whitesmoke;
`;
