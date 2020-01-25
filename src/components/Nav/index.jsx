import React from "react";
import styled from "styled-components";

const Nav = props => {
  return (
    <nav>
      <ul>{props.children}</ul>
    </nav>
  );
};

export default Nav;
