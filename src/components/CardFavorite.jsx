import React, {useState} from "react"
import ButtonFav from "./ButtonFav"
import Button from "../components/Button"
import InfoPokemon from "../components/InfoPokemon"
import styled from "styled-components"
//redux
import { useDispatch } from "react-redux"
import { NotFavorite } from "../Slices/dataSlice"
//icons
import { AiTwotoneFire } from "react-icons/ai"
import { GiUnicorn } from "react-icons/gi"
import { MdLocationPin } from "react-icons/md"
//modals
import Modal_1 from "../modals/Modal_1"
import InfoShiny from "./InfoShiny"
import InfoLocation from "./InfoLocation"

function CardFavorite(props) {
  const [details, setDetails] = useState(false)
  const [shiny, SetShiny] = useState(false)
  const [location, SetLocation] = useState(false)

  //devulve una array con los nombres de los pokemons
  const Habilities = props.abilities.map((element) => element.ability.name);

  const dataPokemon = {
    name: props.name,
    pokemonId: props.id,
    favorite: props.favorite,
    abilities: Habilities,
  };

  const dataShiny = props.sprites;

  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(NotFavorite(dataPokemon));
  };

  const tiposPokemon = props.types
    .map((element) => element.type.name)
    .join(", ");

  const Detalles = () => {
    setDetails(!details);
  };

  const ViewShiny = () => {
    SetShiny(!shiny);
  }

  const ViewLocation = () => {
    SetLocation(!location)
  }

  return (
    <ContainerCard>
      <Header>
        <span>{props.name}</span>
        <ButtonFav Isfavorite={props.favorite} onClick={handleOnFavorite} />
      </Header>

      <picture>
        <ImagePokemon src={props.img} alt={props.name} />
      </picture>

      <ContainerFooter>
        <span>Type: {tiposPokemon}</span>
      </ContainerFooter>

      {details && (
        <Modal_1>
          <InfoPokemon dataPokemon={dataPokemon}  action={Detalles} />
        </Modal_1>
      )}

      {shiny && (
        <Modal_1>
          <InfoShiny dataPokemon={dataShiny} dataName={props.name} action={ViewShiny} />
        </Modal_1>
      )}

      {location && (
        <Modal_1>
          <InfoLocation dataPokemon={props.location}  dataName={props.name} action={ViewLocation} />
        </Modal_1>
      )}

      <ContainerIcons>
        <Button
          action={Detalles}
          Icon={Icon}
          description={'View abilities'}
        />

        <Button
        action={ViewShiny}
        Icon={IconShyny}
        description={'View shyny version'}
        />

        <Button
        action={ViewLocation}
        Icon={IconLocation}
        description={'View Location'}
        />
      </ContainerIcons>
    </ContainerCard>
  );
}

export default CardFavorite;

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
  height: auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  justify-content: space-between;
  width: 100%;
`;

const ImagePokemon = styled.img`
  height: 200px;
`;

const ContainerFooter = styled.div`
  display: flex;
  color: whitesmoke;
  margin-bottom: 20px;
`;

const ContainerIcons = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled(AiTwotoneFire)`
  color: #facc15;
  font-size: 1.5rem;
  cursor: pointer;
`;

const IconShyny = styled(GiUnicorn)`
  color:#fa6915;
  font-size: 1.5rem;
  cursor: pointer;
`;

const IconLocation = styled(MdLocationPin)`
  color:#c71407;
  font-size: 1.5rem;
  cursor: pointer;
`;
