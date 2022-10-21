import React from 'react'
import styled from 'styled-components'
import IconStarOutline from './IconStarOutline'
import IconStarSolid from './IconStarSolid'

function ButtonFav({Isfavorite, onClick}) {
    const Icon = !Isfavorite? IconStarOutline : IconStarSolid;
    return ( 
        <Btn onClick={onClick}>
            <Icon/>
        </Btn>
     );
}

export default ButtonFav;

const Btn = styled.button`
background-color: transparent;
border: none;
color:  rgb(255 203 5);
font-size: 1.3rem;
cursor: pointer;
`;