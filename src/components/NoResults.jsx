import React from 'react';
import styled from 'styled-components';

function NoResults(props) {

    return ( 
        <div>
           {
            (props.busqueda.length > 0)? <Texto>Lo siento, no encontramos un pokemon llamado "{props.busqueda}" </Texto> : <Texto>Busca un pokemon!</Texto>
           }
        </div>
     );
}

export default NoResults;

const Texto = styled.p`
  font-weight: 600;
  color: white;
  font-size: 1rem;
  margin-bottom: 30px;
`;