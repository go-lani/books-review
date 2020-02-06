import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import UtilMenu from "../components/UtilMenu";
import BooksContainer from "../containers/BooksContainer";
import AddBook from "../components/Books/AddBook";
import Container from "../layouts/Container";
import withAuth from "../hocs/withAuth";

const Home = () => {
  return (
    <>
      <Header>
        <Navigation />
        <UtilMenu />
      </Header>
      <Container sectionName="책 리스트">
        <BooksContainer />
      </Container>
      <AddBook />
    </>
  );
};

export default withAuth(Home);
