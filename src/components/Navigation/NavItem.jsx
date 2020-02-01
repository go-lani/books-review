import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setToken } from "../../actions";

const StyledNavItem = styled.li`
  float: left;

  button {
    display: block;
    padding: 5px;
    font-size: 1.4rem;
    line-height: 30px;
    background: none;
    border: none;
  }

  & + & {
    margin: 0 0 0 10px;
  }
`;

const NavItem = ({ text }) => {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  const signOut = () => {
    console.log(token);
    axios.delete("https://api.marktube.tv/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch(setToken(null));
    localStorage.removeItem("token");
  };
  return (
    <StyledNavItem>
      <button type="button" onClick={signOut}>
        {text}
      </button>
    </StyledNavItem>
  );
};

export default NavItem;
