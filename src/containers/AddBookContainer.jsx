import { connect } from "react-redux";
import Addbook from "../components/Books/AddBook";
import { hideAddPopupSaga } from "../redux/modules/popup";
import { addBookSaga } from "../redux/modules/books";

export default connect(
  state => ({
    visible: state.popup.addPopupVisible,
  }),
  dispatch => ({
    hidePopup: () => {
      dispatch(hideAddPopupSaga());
    },
    addBook: addbookInfo => {
      dispatch(addBookSaga(addbookInfo));
    },
  }),
)(Addbook);
