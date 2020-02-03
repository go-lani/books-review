import React from "react";
import NavItem from "./NavItem";
import withAuth from "../../hocs/withAuth";
import { NavigationBar } from "./indexStyled";

const Navigation = ({ token }) => {
  return (
    <nav>
      <NavigationBar>
        <NavItem token={token} text={token ? "SignOut" : "SignIn"} />
      </NavigationBar>
    </nav>
  );
};

export default withAuth(Navigation);
