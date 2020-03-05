import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const Label = styled.label`
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

export const Input = styled.input`
  width: 100%;
  padding: 12px 5px;
  border: none;
  border-bottom: ${({ active }) =>
    active ? "1px solid #04d9b2" : "1px solid #fff"};
  background: none;
  font-size: 1.4rem;
  line-height: 1.5;
  color: #04d9b2;
  transition: all 0.3s;

  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-bottom: 1px solid #04d9b2;
  }
`;

const Inputs = React.forwardRef(
  (
    { id, type, essential, children, placeHolder, onChange, val, defaultValue },
    ref,
  ) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
      if (defaultValue) setActive(true);
    }, [defaultValue]);

    return (
      <>
        <Label htmlFor={id}>
          {children}
          {essential && <span className="ess">*</span>}
        </Label>
        <Input
          type={type}
          id={id}
          ref={ref}
          defaultValue={defaultValue}
          placeholder={placeHolder}
          onBlur={() => (val ? setActive(true) : setActive(false))}
          onFocus={() => setActive(true)}
          active={active}
          onChange={onChange}
        />
      </>
    );
  },
);

export default Inputs;
