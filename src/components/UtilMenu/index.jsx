import React from "react";
import Button from "../common/Button";
import { showAddPopupSaga } from "../../redux/modules/popup";
import { useDispatch } from "react-redux";

const UtilMenu = () => {
  const dispatch = useDispatch();

  const click = async () => {
    dispatch(showAddPopupSaga());
  };
  return (
    <Button size="medium" color="blue" width="120" onClick={click}>
      ADD
    </Button>
  );
};

// export default connect(
//   () => ({}),
//   dispatch => ({
//     showPopup: () => {
//       dispatch(showPopup());
//     },
//   }),
// )(UtilMenu);

export default UtilMenu;
