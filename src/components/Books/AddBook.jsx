import React from "react";
import styled from "styled-components";
import Inputs from "../Input";
import Buttons from "../Button";
import Popup from "../Popup";

const InputBox = styled.div`
  & + & {
    margin: 25px 0 0;
  }
`;

const Legend = styled.legend`
  display: block;
  width: 100%;
  margin: 0 0 40px;
  font-size: 3rem;
  color: #fff;
`;

const ButtonBox = styled.div`
  margin: 50px 0 0;
`;

const AddBook = props => {
  const titleRef = React.createRef();
  const messageRef = React.createRef();
  const authorRef = React.createRef();
  const urlRef = React.createRef();

  return (
    <Popup {...props}>
      <form>
        <fieldset>
          <Legend>Add a Book</Legend>
          <InputBox>
            <Inputs
              ref={titleRef}
              type="text"
              id="title"
              placeHolder="Enter Book Title"
              essential
            >
              Title
            </Inputs>
          </InputBox>
          <InputBox>
            <Inputs
              ref={messageRef}
              type="text"
              id="Message"
              placeHolder="Enter Book Message"
            >
              Message
            </Inputs>
          </InputBox>
          <InputBox>
            <Inputs
              ref={authorRef}
              type="text"
              id="Author"
              placeHolder="Enter Book Author"
              essential
            >
              Author
            </Inputs>
          </InputBox>
          <InputBox>
            <Inputs
              ref={urlRef}
              type="text"
              id="URL"
              placeHolder="Enter Book URL"
            >
              URL
            </Inputs>
          </InputBox>
        </fieldset>
        <ButtonBox>
          <Buttons size="medium" width={150} color="blue">
            ADD
          </Buttons>
        </ButtonBox>
      </form>
    </Popup>
  );
};

export default AddBook;
