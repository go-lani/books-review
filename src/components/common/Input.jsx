import React, { useState } from "react";
import { Label, Input } from "./InputStyled";

const Inputs = ({
  type,
  id,
  name,
  essential,
  children,
  placeHolder,
  onChange,
  val,
}) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Label htmlFor={id}>
        {children}
        {essential && <span className="ess">*</span>}
      </Label>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeHolder}
        onBlur={() => (val ? setActive(true) : setActive(false))}
        onFocus={() => setActive(true)}
        active={active}
        onChange={onChange}
      />
    </>
  );
};

export default Inputs;
