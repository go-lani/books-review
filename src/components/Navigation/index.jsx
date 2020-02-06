import React from "react";
import NavItem from "./NavItem";
import withAuth from "../../hocs/withAuth";
import { NavigationBar } from "./indexStyled";

const Navigation = () => {
  return (
    <nav>
      <NavigationBar>
        <NavItem />
      </NavigationBar>
    </nav>
  );
};

export default withAuth(Navigation);
