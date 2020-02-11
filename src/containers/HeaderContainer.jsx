import { connect } from "react-redux";
import Header from "../components/Header";
import { showAddPopupSaga } from "../redux/modules/popup";
import { signOutSaga } from "../redux/modules/auth";

export default connect(
  () => ({}),
  dispatch => ({
    signOut: () => {
      dispatch(signOutSaga());
    },
    showAddPopup: () => {
      dispatch(showAddPopupSaga());
    },
  }),
)(Header);
