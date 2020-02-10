import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import UtilMenu from "../components/UtilMenu";
import Books from "../components/Books";
import AddBook from "../components/Books/AddBook";
import MainLayout from "../layouts/MainLayout";
import withAuth from "../hocs/withAuth";

const Home = () => {
  return (
    <>
      <Header>
        <Navigation />
        <UtilMenu />
      </Header>
      <MainLayout sectionName="책 리스트">
        <Books />
      </MainLayout>
      <AddBook />
    </>
  );
};

export default withAuth(Home);
