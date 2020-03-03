import React, { useState } from "react";
import Inputs from "../Common/Input";
import Buttons from "../Common/Button";
import Popup from "../Popup";
import { InputBox, Legend, ButtonBox } from "./AddBookStyled";

const AddBook = ({ visible, hidePopup, addBook }) => {
  const [bookInfo, setBookInfo] = useState({
    title: null,
    message: null,
    author: null,
    url: null,
  });

  function onHandledChange(e) {
    setBookInfo({
      ...bookInfo,
      [e.target.id]: e.target.value,
    });
  }

  function onHandledSubmit(event) {
    addBook(bookInfo);
    hidePopup();
    event.preventDefault();
  }

  return (
    <Popup visible={visible} hide={hidePopup}>
      <form onSubmit={onHandledSubmit}>
        <fieldset>
          <Legend>Add a Book</Legend>
          <InputBox>
            <Inputs
              type="text"
              id="title"
              name="title"
              placeHolder="Enter Book Title"
              essential
              onChange={onHandledChange}
            >
              Title
            </Inputs>
          </InputBox>
          <InputBox>
            <Inputs
              type="text"
              id="message"
              name="message"
              placeHolder="Enter Book Message"
              onChange={onHandledChange}
            >
              Message
            </Inputs>
          </InputBox>
          <InputBox>
            <Inputs
              type="text"
              id="author"
              name="author"
              placeHolder="Enter Book Author"
              onChange={onHandledChange}
              essential
            >
              Author
            </Inputs>
          </InputBox>
          <InputBox>
            <Inputs
              type="text"
              id="url"
              name="url"
              placeHolder="Enter Book URL"
              onChange={onHandledChange}
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
