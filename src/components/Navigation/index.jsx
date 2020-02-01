import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import withAuth from "../../hocs/withAuth";

const NavigationBar = styled.ul`
  overflow: hidden;
`;

const Navigation = ({ token }) => {
  return (
    <nav>
      <NavigationBar>
        <NavItem text={token ? "SignOut" : "SignIn"} />
      </NavigationBar>
    </nav>
  );
};

export default withAuth(Navigation);
