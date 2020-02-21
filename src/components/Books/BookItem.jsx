import React from "react";
import Buttons from "../Common/Button";
import { Li, ImgBox, Title, Author, Message } from "./BookItemStyled";

const BookItem = ({ book, removeBook }) => {
  return (
    <Li>
      <ImgBox>
        <img src={book.url} alt={book.title} />
      </ImgBox>
      <Title>{book.title}</Title>
      <Author>저자 {book.author}</Author>
      <Message>{book.message}</Message>
      <Buttons
        size="small"
        color="pink"
        onClick={() => removeBook(book.bookId)}
      >
        Remove
      </Buttons>
    </Li>
  );
};

export default BookItem;
