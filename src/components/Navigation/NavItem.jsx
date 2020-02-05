import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signOutThunk } from "../../actions";

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

const NavItem = ({ text, token, signOut }) => {
  return (
    <StyledNavItem>
      <button type="button" onClick={() => signOut(token)}>
        {text}
      </button>
    </StyledNavItem>
  );
};

export default connect(
  () => ({}),
  dispatch => ({
    signOut: token => {
      dispatch(signOutThunk(token));
    },
  }),
)(NavItem);
