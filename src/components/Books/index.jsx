import React, { useEffect } from "react";
import BookItem from "./BookItem";
import NoneItem from "../Books/NoneItem";
import { Ul } from "./indexStyled";
import { useDispatch, useSelector } from "react-redux";
import { startBooksSaga } from "../../redux/modules/books";

const Books = () => {
  const books = useSelector(state => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startBooksSaga());
  }, [dispatch]);

  return (
    <>
      {books.length ? (
        <Ul>
          {books.map(book => (
            <BookItem key={book.bookId} book={book} />
          ))}
        </Ul>
      ) : (
        <NoneItem />
      )}
    </>
  );
};

export default Books;
