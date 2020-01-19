import React from "react";
import styled, { css } from "styled-components";

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

const sizeStyles = css`
  ${({ size, width }) => css`
    width: ${width}px;
    height: ${sizes[size].height};
    border-radius: ${sizes[size].borderRadius};
    font-size: ${sizes[size].fontSize};
    line-height: ${sizes[size].lineHeight};
  `}
`;

const Button = styled.button`
  display: inline-block;
  height: 20px;
  border: none;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 18px;
  color: #000;
  padding: 0 10px;

  & + & {
    margin: 0 0 0 20px;
  }

  ${sizeStyles}
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
