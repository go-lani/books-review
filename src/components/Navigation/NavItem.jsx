import React from "react";
import styled from "styled-components";
import { signOutSaga } from "../../redux/modules/auth";
import { useDispatch } from "react-redux";

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

const NavItem = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(signOutSaga());
  };
  return (
    <StyledNavItem>
      <button type="button" onClick={onClick}>
        SignOut
      </button>
    </StyledNavItem>
  );
};

export default NavItem;
