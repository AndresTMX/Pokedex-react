import React from 'react'
import IconSearch from '../components/IconSearch'
import styled from 'styled-components'
import { setSearch } from '../Slices/dataSlice'
import { useDispatch } from 'react-redux'

function Searcher({setSearchValue, searchValue}) {
    const dispatch = useDispatch();

    const onSearchValueChangue = (event) => {
        setSearchValue(event.target.value)
        dispatch(setSearch(event.target.value))
      };

    return (  
        <Container>
        <Input onChange={onSearchValueChangue} value={searchValue} placeholder='Busca un pokemon'/>
        <ContainerIcon>
        <IconSearch/>
        </ContainerIcon>
        </Container>
    );
}

export default Searcher;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 60vw;
  @media (max-width:700px){
    width: 80%;
    position: relative;
    left:10px;
  }
`;

const Input = styled.input`
  display: flex;
  min-width: 60%;
  padding: 15px;
  border-radius: 4px;
  margin: 5px;
  -webkit-box-shadow: 1px 15px 28px 1px rgba(0, 0, 0, 0.295);
  -moz-box-shadow: 1px 15px 28px 1px  rgba(0, 0, 0, 0.295);
  box-shadow: 1px 15px 28px 1px  rgba(0, 0, 0, 0.295);
  outline: none;
  border: none;
  @media (max-width:700px){
    width: 100%;
  }
`;

const ContainerIcon = styled.div`
  display: flex;
  position: relative;
  right:50px;
`;