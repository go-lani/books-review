import React, { useState, useEffect } from "react";
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
  const [books, setBooks] = useState();
  const [addBookVisible, setAddBookVisible] = useState(false);

  const getBooks = async () => {
    try {
      const { data } = await axios.get("https://api.marktube.tv/v1/book", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const handledAddBook = () => {
    setAddBookVisible(!addBookVisible);
  };

  return (
    <>
      <Header>
        <Navigation />
        <UtilMenu onVisible={handledAddBook} />
      </Header>
      <Container area="책 리스트">
        {books && books.length ? <Books books={books} /> : <NoneItem />}
      </Container>
      {addBookVisible ? <AddBook onVisible={handledAddBook} /> : null}
    </>
  );
};

export default withAuth(Home);
