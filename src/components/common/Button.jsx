import React from "react";
import { Button } from "./ButtonStyled";

const Buttons = ({ size, width, color, children, ...rest }) => {
  return (
    <Button size={size} width={width} color={color} {...rest}>
      {children}
    </Button>
  );
};

Buttons.defaultProps = {
  color: "black",
  size: "small",
};

export default Buttons;
