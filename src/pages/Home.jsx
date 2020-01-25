import React, { useState, useEffect } from "react";
import withAuth from "../hocs/withAuth";
import Header from "../components/Header";
import Nav from "../components/Nav";
import NavItem from "../components/Nav/NavItem";
import Button from "../components/Button";
import axios from "axios";

const Home = ({ token }) => {
  const [books, setBooks] = useState();

  const getBooks = async () => {
    try {
      const response = await axios.get("https://api.marktube.tv/v1/book", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(response);
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
        <Nav>
          <NavItem
            to={`${token ? "/signout" : "/signin"}`}
            text={`${token ? "로그아웃" : "로그인"}`}
          />
        </Nav>
        <Button size="medium" color="pink" width="120">
          추가
        </Button>
      </Header>
      <div>홈</div>
    </>
  );
};

export default withAuth(Home);
