import React from "react";
import styled from "styled-components";

const Dim = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const AddBookArea = styled.div`
  width: 400px;
  height: 400px;
  background: #fff;
`;

const AddBook = ({ onVisible }) => {
  return (
    <Dim>
      <AddBookArea>dwdw</AddBookArea>
    </Dim>
  );
};

export default AddBook;
