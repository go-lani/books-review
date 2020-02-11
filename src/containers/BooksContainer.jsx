import { connect } from "react-redux";
import Books from "../components/Books/";
import { getBooksSaga, removeBookSaga } from "../redux/modules/books";

export default connect(
  state => ({
    books: state.books.books,
  }),
  dispatch => ({
    getBooks: async () => {
      dispatch(getBooksSaga());
    },
    removeBook: id => {
      dispatch(removeBookSaga(id));
    },
  }),
)(Books);
