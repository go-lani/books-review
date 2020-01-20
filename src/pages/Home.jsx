import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
