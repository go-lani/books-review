import React from "react";
import { connect } from "react-redux";
import Inputs from "../common/Input";
import Buttons from "../common/Button";
import PopupContainer from "../../containers/PopupContainer";
import { addBookThunk } from "../../actions";
import { InputBox, Legend, ButtonBox } from "./AddBookStyled";

const AddBook = ({ token, addBook, ...rest }) => {
  const titleRef = React.createRef();
  const messageRef = React.createRef();
  const authorRef = React.createRef();
  const urlRef = React.createRef();

  return (
    <PopupContainer {...rest}>
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
          <Buttons
            size="medium"
            width={150}
            color="blue"
            onClick={e => {
              e.preventDefault();

              addBook(
                token,
                titleRef.current.value,
                messageRef.current.value,
                authorRef.current.value,
                urlRef.current.value,
              );
            }}
          >
            ADD
          </Buttons>
        </ButtonBox>
      </form>
    </PopupContainer>
  );
};

export default connect(
  () => ({}),
  dispatch => ({
    addBook: (token, title, message, author, url) => {
      dispatch(addBookThunk(token, title, message, author, url));
    },
  }),
)(AddBook);
