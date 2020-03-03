import React, { useState, useEffect } from "react";
import { Label, Input } from "./InputStyled";

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
