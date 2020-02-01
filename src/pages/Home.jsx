import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import UtilMenu from "../components/UtilMenu";
import Books from "../components/Books";
import AddBook from "../components/Books/AddBook";
import Container from "../layouts/Container";
import withAuth from "../hocs/withAuth";
import axios from "axios";

const Home = ({ token }) => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [addBookVisible, setAddBookVisible] = useState(false);

  const getBooks = useCallback(async () => {
    try {
      const { data } = await axios.get("https://api.marktube.tv/v1/book", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setBooks(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  const addBook = async (e, title, message, author, url) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://api.marktube.tv/v1/book",
        {
          title,
          message,
          author,
          url
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
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
          Authorization: `Bearer ${token}`
        }
      });

      setBooks(books.filter(book => book.bookId !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handledAddBook = useCallback(() => {
    setAddBookVisible(!addBookVisible);
  }, [addBookVisible]);

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  return (
    <>
      <Header>
        <Navigation />
        <UtilMenu onAddVisible={handledAddBook} />
      </Header>
      <Container sectionName="책 리스트">
        {!loading ? (
          <Books books={books} onRemoveBook={removeBook} />
        ) : (
          <div>loading...</div>
        )}
      </Container>
      <AddBook
        visible={addBookVisible}
        onVisible={handledAddBook}
        onAddBook={addBook}
      />
    </>
  );
};

export default withAuth(Home);
