import React from "react";
import { StyledHeader } from "./indexStyled";
import Navigation from "../Navigation";
import UtilMenu from "../UtilMenu";

const Header = ({ signOut, showAddPopup }) => {
  return (
    <StyledHeader>
      <Navigation signOut={signOut} />
      <UtilMenu showAddPopup={showAddPopup} />
    </StyledHeader>
  );
};

export default Header;
