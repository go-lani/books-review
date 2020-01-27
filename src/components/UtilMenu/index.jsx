import React from "react";
import Button from "../Button";

const UtilMenu = ({ onAddVisible }) => {
  return (
    <Button size="medium" color="blue" width="120" onClick={onAddVisible}>
      ADD
    </Button>
  );
};

export default UtilMenu;
