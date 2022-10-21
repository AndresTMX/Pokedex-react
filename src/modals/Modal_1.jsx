import React from "react"
import ReactDom from 'react-dom'
import styled from "styled-components"

function Modal_1({children}) {
    return ReactDom.createPortal(
        <Container>
                {children}
        </Container>,
        document.getElementById('modal_1')
    );
}

export default Modal_1;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0000008f;
  z-index: 20;
`;
