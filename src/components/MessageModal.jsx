import React from "react";
import styled from "styled-components"
import Button from "./Button"

function MessageModal({ Message, State, SetState }) {

  const onClick = () => {
    SetState(!State)
  }

  return (
    <>
      <MessageContainer>
        <Text>{Message}</Text>
      <Button text={'Okay'} action={onClick} />
      </MessageContainer>
      
    </>
  );
}

export default MessageModal;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 100px;
  font-weight: 600;
  font-size: 1rem;
  color: #295094;
  padding: 20px;
  border-radius: 4px;
  background-color: whitesmoke;
`;

const Text = styled.span`
  font-size: 1rem;
  color: #295094;
  padding: 10px;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
`;
