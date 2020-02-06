import { connect } from "react-redux";
import books from "../components/Books/";
import { getBooksThunk } from "../actions";

export default connect(
  state => ({
    books: state.books,
    token: state.token,
  }),
  dispatch => ({
    getBooks: async token => {
      dispatch(getBooksThunk(token));
    },
  }),
)(books);
