import { connect } from "react-redux";
import SigninForm from "../components/Signin/SigninForm";
import { signInThunk } from "../actions";

export default connect(
  state => ({
    loading: state.loading,
    feedVisible: state.feed.visible,
    error: state.feed.comment,
  }),
  dispatch => ({
    signIn: async (email, password) => {
      dispatch(signInThunk(email, password));
    },
  }),
)(SigninForm);
