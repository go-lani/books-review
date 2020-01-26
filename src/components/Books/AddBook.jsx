import React from "react";
import styled from "styled-components";

const AddBookBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Dim = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const AddBookArea = styled.div`
  position: relative;
  z-index: 1;
  width: 400px;
  height: 400px;
  background: #fff;
`;

const AddBook = ({ onVisible }) => {
  return (
    <AddBookBlock>
      <Dim onClick={onVisible} />
      <AddBookArea>dwdw</AddBookArea>
    </AddBookBlock>
  );
};

export default AddBook;
