import React, { useEffect } from "react";
import BookItem from "./BookItem";
import styled from "styled-components";
import media from "../../libs/MediaQuery";
import NoneItem from "../Books/NoneItem";

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

const Books = ({ token, books, getBooks }) => {
  useEffect(() => {
    getBooks(token);
  }, [getBooks, token]);

  return (
    <>
      {books.length ? (
        <Ul>
          {books.map(book => (
            <BookItem token={token} key={book.bookId} book={book} />
          ))}
        </Ul>
      ) : (
        <NoneItem />
      )}
    </>
  );
};

export default Books;
