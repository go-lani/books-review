import React from "react";
import NavItem from "./NavItem";
import withAuth from "../../hocs/withAuth";
import { NavigationBar } from "./indexStyled";

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
