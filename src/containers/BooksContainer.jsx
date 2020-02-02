import { connect } from "react-redux";
import books from "../components/Books/";
import { getBooks } from "../actions";
import axios from "axios";

export default connect(
  state => ({
    books: state.books,
  }),
  dispatch => ({
    getBooks: async token => {
      try {
        const { data } = await axios.get("https://api.marktube.tv/v1/book", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(getBooks(data));
      } catch (err) {
        console.log(err);
      }
    },
  }),
)(books);
