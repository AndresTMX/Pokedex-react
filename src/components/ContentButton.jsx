import React from 'react'
import styled from 'styled-components'

function ContentButton({children}) {
    return ( 
        <Container>
            {children}
        </Container>
     );
}

export default ContentButton;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  margin-bottom: 30px;
  margin-top: 30px;
`;