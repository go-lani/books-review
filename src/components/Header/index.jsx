import React from "react";
import { StyledHeader } from "./indexStyled";

const Header = props => {
  return <StyledHeader>{props.children}</StyledHeader>;
};

export default Header;
