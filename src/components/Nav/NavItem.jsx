import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, text }) => {
  return (
    <li>
      <Link to={to}>{text}</Link>
    </li>
  );
};

export default NavItem;
