import React from "react";
import BookItem from "./BookItem";

const Books = ({ books }) => {
  return (
    <ul>
      {books.map(book => (
        <BookItem />
      ))}
    </ul>
  );
};

export default Books;
