import React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'
//redux
import { useDispatch, useSelector } from "react-redux";
//actions async
import { fetchLocationPokemon } from "../Slices/dataSlice";

function InfoLocation({dataPokemon, dataName, action}) {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchLocationPokemon(dataPokemon));
    }, [])

    const locations = useSelector((state) => state.data.locationPokemons);

    const locationsCities =  locations.map((location) => location.location_area.name)

    const Text = ['Parece no hay informacion disponible de donde encontrar este pokemon']

    const LocationsCitiesRender = (!locationsCities.length)? Text : locationsCities;

    return ( 
        <>
        <CardInfo>

            <span>Puedes capturar un {dataName} en :</span>
            <br/>
            <Lista>
            {LocationsCitiesRender.map((location) => (
                <ItemList>{location}</ItemList>
            ))}
            </Lista>
            <br/>
           <Button
        text={'Okay'}
        action={action}
        />  
        </CardInfo>
        </>
     );
}

export default InfoLocation;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: auto;
  max-width: 80%;
  padding: 20px;
  border-radius: 4px;
  transition: all 300ms;
  color: #343483;
  font-weight:500;
  background-color: white;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
`;

const Lista = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

const ItemList = styled.li`
line-height: 1.5rem;
`;