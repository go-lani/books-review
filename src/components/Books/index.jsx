import React, { useEffect } from "react";
import BookItem from "./BookItem";
import NoneItem from "../Books/NoneItem";
import { Ul } from "./indexStyled";

const Books = ({ books, getBooks, removeBook }) => {
  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <>
      {books.length ? (
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
