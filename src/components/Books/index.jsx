import React, { useEffect } from "react";
import BookItem from "./BookItem";
import NoneItem from "../Books/NoneItem";
import { Ul } from "./indexStyled";

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
