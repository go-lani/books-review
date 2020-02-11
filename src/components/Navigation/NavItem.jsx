import React from "react";
import styled from "styled-components";

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

const NavItem = ({ signOut }) => (
  <StyledNavItem>
    <button type="button" onClick={signOut}>
      SignOut
    </button>
  </StyledNavItem>
);

export default NavItem;
