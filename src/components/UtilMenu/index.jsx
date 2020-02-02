import React from "react";
import Button from "../Button";
import { connect } from "react-redux";
import { showPopup } from "../../actions";

const UtilMenu = ({ showPopup }) => {
  return (
    <Button size="medium" color="blue" width="120" onClick={showPopup}>
      ADD
    </Button>
  );
};

export default connect(
  () => ({}),
  dispatch => ({
    showPopup: () => {
      dispatch(showPopup());
    },
  }),
)(UtilMenu);
