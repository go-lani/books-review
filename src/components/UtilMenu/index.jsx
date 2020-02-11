import React from "react";
import Button from "../Common/Button";

const UtilMenu = ({ showAddPopup }) => {
  return (
    <Button size="medium" color="blue" width="120" onClick={showAddPopup}>
      ADD
    </Button>
  );
};

export default UtilMenu;
