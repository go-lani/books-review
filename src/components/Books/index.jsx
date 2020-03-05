import React, { useEffect } from "react";
import styled from "styled-components";
import BookItem from "./BookItem";
import NoneItem from "../Books/NoneItem";
import media from "../../libs/MediaQuery";

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 0 0 -5%;

  ${media.mobile`
    justify-content: center;
  `}
`;

const Books = ({ books, getBooks, removeBook }) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <>
      {books && books.length ? (
        <Ul>
          {books.map(book => (
            <BookItem key={book.bookId} book={book} removeBook={removeBook} />
          ))}
        </Ul>
      ) : (
        <NoneItem />
      )}
    </>
  );
};

export default Books;
