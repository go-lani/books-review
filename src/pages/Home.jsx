import React from "react";
import HeaderContainer from "../containers/HeaderContainer";
import BooksContainer from "../containers/BooksContainer";
import AddBookContainer from "../containers/AddBookContainer";
import MainLayout from "../layouts/MainLayout";
import withAuth from "../hocs/withAuth";

const Home = () => {
  return (
    <>
      <HeaderContainer />
      <MainLayout sectionName="책 리스트">
        <BooksContainer />
      </MainLayout>
      <AddBookContainer />
    </>
  );
};

export default withAuth(Home);
