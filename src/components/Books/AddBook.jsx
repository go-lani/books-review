import React from "react";
import { useSelector } from "react-redux";
import Inputs from "../common/Input";
import Buttons from "../common/Button";
import Popup from "../Popup";
import { hideAddPopupSaga } from "../../redux/modules/popup";
import { addBookSaga } from "../../redux/modules/books";
import { InputBox, Legend, ButtonBox } from "./AddBookStyled";
import { useDispatch } from "react-redux";

const AddBook = () => {
  const titleRef = React.createRef();
  const messageRef = React.createRef();
  const authorRef = React.createRef();
  const urlRef = React.createRef();
  const dispatch = useDispatch();

  const addPopupVisible = useSelector(state => state.popup.addPopupVisible);

  function hide() {
    dispatch(hideAddPopupSaga());
  }

  function addBook(e) {
    e.preventDefault();
    const addbookInfo = {
      title: titleRef.current.value,
      message: messageRef.current.value,
      author: authorRef.current.value,
      url: urlRef.current.value,
    };

    dispatch(addBookSaga(addbookInfo));
    hide();
  }

  return (
    <Popup visible={addPopupVisible} hide={hide}>
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
          <Buttons size="medium" width={150} color="blue" onClick={addBook}>
            ADD
          </Buttons>
        </ButtonBox>
      </form>
    </Popup>
  );
};

export default AddBook;
