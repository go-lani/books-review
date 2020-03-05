import React from "react";
import NavItem from "./NavItem";
import withAuth from "../../hocs/withAuth";
import styled from "styled-components";

export const NavigationBar = styled.ul`
  overflow: hidden;
`;

const Navigation = ({ signOut }) => {
  return (
    <nav>
      <NavigationBar>
        <NavItem signOut={signOut} />
      </NavigationBar>
    </nav>
  );
};

export default withAuth(Navigation);
