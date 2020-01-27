import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import UtilMenu from "../components/UtilMenu";
import Books from "../components/Books";
import NoneItem from "../components/Books/NoneItem";
import AddBook from "../components/Books/AddBook";
import Container from "../layouts/Container";
import withAuth from "../hocs/withAuth";
import axios from "axios";

const Home = ({ token }) => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState();
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

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const handledAddBook = useCallback(() => {
    setAddBookVisible(!addBookVisible);
  }, [addBookVisible]);

  return (
    <>
      <Header>
        <Navigation />
        <UtilMenu onAddVisible={handledAddBook} />
      </Header>
      <Container area="책 리스트">
        {!loading ? (
          books && books.length ? (
            <Books books={books} />
          ) : (
            <NoneItem />
          )
        ) : (
          "loading..."
        )}
      </Container>
      <AddBook visible={addBookVisible} onVisible={handledAddBook} />
    </>
  );
};

export default withAuth(Home);
