import React, { useState, useRef } from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  margin: 0 0 10px;
  font-size: 1.6rem;
  color: #fff;
  transition: all 0.3s;

  .ess {
    display: inline-block;
    color: #bf4141;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 5px;
  border: none;
  border-bottom: ${({ active }) =>
    active ? "1px solid #04adbf" : "1px solid #fff"};
  background: none;
  font-size: 1.4rem;
  line-height: 1.5;
  color: #04adbf;
  transition: all 0.3s;

  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-bottom: 1px solid #04adbf;
  }
`;

const Inputs = ({ type, id, essential, children, placeHolder }) => {
  const inputs = useRef();
  const [active, setActive] = useState(false);

  const valueCheck = () => {
    if (inputs.current.value !== "") setActive(true);
    else setActive(false);
  };

  return (
    <>
      <Label htmlFor={id}>
        {children}
        {essential && <span className="ess">*</span>}
      </Label>
      <Input
        ref={inputs}
        type={type}
        id={id}
        placeholder={placeHolder}
        onBlur={valueCheck}
        onFocus={() => setActive(true)}
        active={active}
      />
    </>
  );
};

export default Inputs;
