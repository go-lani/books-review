import React from "react";
import Button from "../Button";

const UtilMenu = ({ onVisible }) => {
  return (
    <Button size="medium" color="pink" width="120" onClick={onVisible}>
      추가
    </Button>
  );
};

export default UtilMenu;
