import React from "react";
import Buttons from "../common/Button";
import { Li, ImgBox, Title, Author, Message } from "./BookItemStyled";
import { removeBookSaga } from "../../redux/modules/books";
import { useDispatch } from "react-redux";

const BookItem = ({ book, removeBook }) => {
  const dispatch = useDispatch();

  function remove(id) {
    dispatch(removeBookSaga(id));
  }

  return (
    <Li>
      <ImgBox>
        <img src={book.url} alt={book.title} />
      </ImgBox>
      <Title>{book.title}</Title>
      <Author>저자 {book.author}</Author>
      <Message>{book.message}</Message>
      <Buttons size="small" color="pink" onClick={() => remove(book.bookId)}>
        Remove
      </Buttons>
    </Li>
  );
};

export default BookItem;
