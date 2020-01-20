import React from "react";
import { Link, Redirect } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");

  if (token === null) return <Redirect to="/signin" />;

  return (
    <>
      <ul>
        <li>
          <Link to="/signin">로그인</Link>
        </li>
      </ul>
      <div>홈</div>
    </>
  );
};

export default Home;
