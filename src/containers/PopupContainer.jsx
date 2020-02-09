import { connect } from "react-redux";
import Popup from "../components/Popup";
import { showPopup, hidePopup } from "../actions";

export default connect(
  () => ({}),
  dispatch => ({
    showPopup: () => {
      dispatch(showPopup());
    },
    hidePopup: () => {
      dispatch(hidePopup());
    },
  }),
)(Popup);
