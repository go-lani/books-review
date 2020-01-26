import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavItem = styled.li`
  float: left;

  a {
    display: block;
    padding: 5px;
    font-size: 1.4rem;
    line-height: 30px;
  }

  & + & {
    margin: 0 0 0 10px;
  }
`;

const NavItem = ({ to, text }) => {
  return (
    <StyledNavItem>
      <Link to={to}>{text}</Link>
    </StyledNavItem>
  );
};

export default NavItem;
