import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import withAuth from "../hocs/withAuth";
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
      <ul>
        <li>
          <Link to={`${token ? "/signout" : "/signin"}`}>
            {token ? "로그아웃" : "로그인"}
          </Link>
        </li>
      </ul>
      <div>홈</div>
    </>
  );
};

export default withAuth(Home);
