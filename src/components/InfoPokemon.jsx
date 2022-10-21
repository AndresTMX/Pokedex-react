import React from "react"
import styled from "styled-components"
import Button from "./Button"
//use pokeredux
import { useSelector } from "react-redux"
//helpers
import {
  FilterAbilities,
  callbackAbilities,
  callbackLanguage,
} from "../helpers";

function InfoPokemon({ dataPokemon, dataName, action }) {
  const abilities = useSelector((state) => state.data.abilities);

  const abilitiesCurrentPokemon = dataPokemon.abilities;

  const abilitiesPokemon = FilterAbilities(
    abilities,
    abilitiesCurrentPokemon,
    callbackAbilities,
    callbackLanguage
  );

  const shortsEffects = abilitiesPokemon.map((element) => element.short_effect);

  return (
    <Card>
      <Abilities>
        Skills:
        {abilitiesCurrentPokemon.map((element) => (
          <Abilities key={element}> {element + ","} </Abilities>
        ))}
      </Abilities>
      <span>
        {shortsEffects.map((element) => (
          <ShortEffect key={element}>
            {element} <br />
          </ShortEffect>
        ))}
      </span>
      <Button text={'Okay'} action={action}/>
    </Card>
  );
}

export default InfoPokemon;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  max-width: 80%;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  transition: all 300ms;
  color: #343483;
  font-weight:500;
  background-color: white;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
`;

const Abilities = styled.span`
  text-align: left;
  width: 100%;
  font-weight: 600;
`;

const ShortEffect = styled.p`
  color: #343483;
  font-weight:500;
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: 600;  
`;
