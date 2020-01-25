import React from "react";
import styled from "styled-components";

const HeaderLayout = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #000;
  color: #fff;
`;

const Header = props => {
  return <HeaderLayout>{props.children}</HeaderLayout>;
};

export default Header;
