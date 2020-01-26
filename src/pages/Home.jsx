import React, { useState, useEffect } from "react";
import withAuth from "../hocs/withAuth";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import UtilMenu from "../components/UtilMenu";
import Container from "../layouts/Container";
import axios from "axios";

const Home = ({ token }) => {
  const [books, setBooks] = useState();

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

  return (
    <>
      <Header>
        <Navigation />
        <UtilMenu />
      </Header>
      <Container area="책 리스트"></Container>
    </>
  );
};

export default withAuth(Home);
