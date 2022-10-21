import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";

function Confirmed({ modalFavorite, setModalFavorite, favorite }) {
  const ToggleModal = () => {
    setModalFavorite(!modalFavorite);
  };


  const textTrue =
    "Haz agregado este pokemon a favoritos, ahora puedes ver mas sobre el en la seccion de favoritos";
  const textFalse =
    "Haz eliminado este pokemon de favoritos, ya no podras verlo en tu coleccion";

  return (
    <Container>
      <ModalBox>
        <Text>
          {(favorite)?textTrue:textFalse}
        </Text>
        <br />
        <Enlace to="/favorites">Ir a favoritos</Enlace>
        <Button text={"Okay"} action={ToggleModal} />
      </ModalBox>
    </Container>
  );
}

export default Confirmed;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: whitesmoke;
  height: auto;
  width: auto;
  max-width: 80%;
  top: 30%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  box-shadow: 0px 15px 10px -15px #111;
  font-family: 'Roboto', sans-serif;
`;

const Text = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2rem;
  text-align: center;
`;

const Enlace = styled(Link)`
  color: #295094;
  font-weight: 600;
  margin-bottom: 20px;
  font-weight: 500;
  text-decoration: none;
`;
