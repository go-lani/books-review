import React from "react";
import styled from "styled-components";
import { sienna } from "color-name";

const sizes = {
  small: {
    height: "30px",
    fontSize: "1.4rem",
    lineHeight: "28px",
    borderRadius: "3px"
  },
  medium: {
    height: "40px",
    fontSize: "1.8rem",
    lineHeight: "38px",
    borderRadius: "7px"
  },
  large: {
    height: "50px",
    fontSize: "2.2rem",
    lineHeight: "48px",
    borderRadius: "10px"
  }
};

const Button = styled.button`
  display: inline-block;
  width: ${({ width }) => width}px;
  height: ${({ size }) => sizes[size].height};
  border: none;
  border-radius: ${({ size }) => sizes[size].borderRadius};
  font-weight: 400;
  font-size: ${({ size }) => sizes[size].fontSize};
  line-height: ${({ size }) => sizes[size].lineHeight};
  color: #000;
  padding: 0 10px;

  & + & {
    margin: 0 0 0 20px;
  }
`;

const Buttons = ({ size, width, color, children, ...rest }) => {
  console.log(size);
  return (
    <Button size={size} width={width} color={color} {...rest}>
      {children}
    </Button>
  );
};

export default Buttons;
