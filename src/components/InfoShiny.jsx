import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function InfoShiny({dataPokemon, dataName, action}) {

    const ShinyVersion = dataPokemon.front_shiny

    return ( 
        <>
        <CardInfo>

          <Text>{dataName} Shiny</Text>

            <picture>
                <ImagePokemon src={ShinyVersion} alt={'Shiny Version'}/>
            </picture>

            <Button
            text={'Ok'}
            action={action}
            description={'View Shiny Version'}
            />
        </CardInfo>
        </>
     );
}

export default InfoShiny;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width:auto;
  max-width: 550px;
  padding: 20px;
  border-radius: 4px;
  transition: all 300ms;
  color: #343483;
  font-weight:500;
  background-color: white;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
`;

const ImagePokemon = styled.img`
  height: 250px;
`;

const Text = styled.span`
font-size: 1.3rem;
color: #343483;
font-weight: 800;
text-align: center;
`;
