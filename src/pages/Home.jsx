import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import UtilMenu from "../components/UtilMenu";
import BooksContainer from "../containers/BooksContainer";
import AddBook from "../components/Books/AddBook";
import Container from "../layouts/Container";
import withAuth from "../hocs/withAuth";
import axios from "axios";

const Home = ({ token }) => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [addBookVisible, setAddBookVisible] = useState(false);

  const addBook = async (e, title, message, author, url) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://api.marktube.tv/v1/book",
        {
          title,
          message,
          author,
          url,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setBooks(books.concat(data));
      setAddBookVisible(!addBookVisible);
    } catch (err) {
      console.log(err);
    }
  };

  const removeBook = async id => {
    try {
      await axios.delete(`https://api.marktube.tv/v1/book/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBooks(books.filter(book => book.bookId !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handledAddBook = useCallback(() => {
    setAddBookVisible(!addBookVisible);
  }, [addBookVisible]);

  return (
    <>
      <Header>
        <Navigation />
        <UtilMenu />
      </Header>
      <Container sectionName="책 리스트">
        <BooksContainer token={token} books={books} onRemoveBook={removeBook} />
        {/* {!loading ? (
          <BooksContainer
            token={token}
            books={books}
            onRemoveBook={removeBook}
          />
        ) : (
          <div>loading...</div>
        )} */}
      </Container>
      <AddBook token={token} />
    </>
  );
};

export default withAuth(Home);
