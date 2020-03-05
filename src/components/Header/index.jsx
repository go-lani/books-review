import React from "react";
import Navigation from "../Navigation";
import UtilMenu from "../UtilMenu";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  background: #28343d;
  color: #fff;
`;

const Header = ({ signOut, showAddPopup }) => {
  return (
    <StyledHeader>
      <Navigation signOut={signOut} />
      <UtilMenu showAddPopup={showAddPopup} />
    </StyledHeader>
  );
};

export default Header;
