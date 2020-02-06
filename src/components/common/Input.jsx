import React, { useState } from "react";
import { Label, Input } from "./InputStyled";

const Inputs = React.forwardRef(
  ({ type, id, essential, children, placeHolder }, ref) => {
    const [active, setActive] = useState(false);

    const valueCheck = () => {
      if (ref.current.value !== "") setActive(true);
      else setActive(false);
    };

    return (
      <>
        <Label htmlFor={id}>
          {children}
          {essential && <span className="ess">*</span>}
        </Label>
        <Input
          ref={ref}
          type={type}
          id={id}
          placeholder={placeHolder}
          onBlur={valueCheck}
          onFocus={() => setActive(true)}
          active={active}
        />
      </>
    );
  },
);

export default Inputs;
