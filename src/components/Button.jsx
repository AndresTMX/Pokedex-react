import React from 'react';
import styled from 'styled-components';

function Button({text, action, Icon, description}) {

  const Btn = (!Icon)? BotonGeeneric : Icon

    return ( 
        <Btn
        onClick={action} title={description}
        >{text}
        </Btn>
     );
}

export default Button;

const BotonGeeneric = styled.button`
  padding: 14px;
  margin: 5px;
  color: white;
  border: solid 1px white;
  border-radius: 4px;
  background-color: #343483;
  transition: all 300ms;
  font-size:0.9rem;
  width: 100%;
  max-width: 150px;
  cursor: pointer;
  :hover{
    background-color: rgb(255 203 5);
  }
`;
