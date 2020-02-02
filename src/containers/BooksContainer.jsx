import { connect } from "react-redux";
import books from "../components/Books/index";
import { getBooks } from "../actions";
import axios from "axios";

export default connect(
  state => ({
    loading: state.loading,
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
        // setLoading(false);
      } catch (err) {
        console.log(err);
      }
    },
  }),
)(books);
