import React from "react";
import { Link } from "react-router-dom";
import withAuth from "../hocs/withAuth";

const Home = ({ token }) => {
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
