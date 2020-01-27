import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  background: #28343d;
  color: #fff;
`;

const Header = props => {
  return <StyledHeader>{props.children}</StyledHeader>;
};

export default Header;
