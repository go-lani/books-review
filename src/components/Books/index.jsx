import React from "react";
import BookItem from "./BookItem";
import styled from "styled-components";
import media from "../../libs/MediaQuery";

const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 0 0 -5%;

  ${media.tablet`
    justify-content: center;
  `}

  ${media.mobile`
    justify-content: center;
  `}
`;

const Books = ({ books, onRemoveBook }) => {
  return (
    <Ul>
      {books.map(book => (
        <BookItem key={book.bookId} book={book} onRemoveBook={onRemoveBook} />
      ))}
    </Ul>
  );
};

export default Books;