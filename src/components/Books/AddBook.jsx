import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Inputs from "../Input";
import Buttons from "../Button";
import PopupContainer from "../../containers/PopupContainer";
import { addBook, hidePopup } from "../../actions";
import axios from "axios";

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
    addBook: async (token, title, message, author, url) => {
      try {
        const { data } = await axios.post(
          "https://api.marktube.tv/v1/book",
          {
            title,
            message,
            author,
            url,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        dispatch(hidePopup());
        dispatch(addBook(data));
      } catch (err) {
        console.log(err);
      }
    },
  }),
)(AddBook);
