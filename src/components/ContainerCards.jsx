import React from 'react'
import styled from 'styled-components'

function ContainerCard({children, page}) {
    return (
        <>
        <PageCounter>
            Page : {page} 
        </PageCounter> 
        <Container>
            {children}
        </Container>
        </>
     );
}

export default ContainerCard;

const Container = styled.div`
    display:grid;
    place-items: center;
    margin: 0px;
    padding: 0px;
    width: 1000px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    @media (max-width:1100px) {
    width: 700px;
    grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width:950px ) {
    width: 500px;
    grid-template-columns: repeat(2, 1fr);  
    }
    @media (max-width:550px ) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);  
    }
`;

const PageCounter = styled.span`
  display: flex;
  align-items: center;
  position: relative;
  height: 20px;
  top: -12px;
  right: 24%;
  color: #ffffffc1;
  background-color: #343483;
  padding: 15px;
  border-radius: 4px;
  border: 1px solid white;
  box-shadow: -1px 3px 3px 1px rgba(0, 0, 0, 0.219);
  font-size: 0.9rem;
`;
