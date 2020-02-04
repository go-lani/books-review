import axios from "axios";
import { connect } from "react-redux";
import SigninForm from "../components/Signin/SigninForm";
import {
  setToken,
  startLoading,
  endLoading,
  setFeedComment,
  setFeedVisible,
} from "../actions";

export default connect(
  state => ({
    loading: state.loading,
    feedVisible: state.feed.visible,
    error: state.feed.comment,
  }),
  dispatch => ({
    requestSignIn: async (email, password) => {
      dispatch(startLoading());

      try {
        const response = await axios.post("https://api.marktube.tv/v1/me", {
          email,
          password,
        });

        const { token } = response.data;

        localStorage.setItem("token", token);
        dispatch(setToken(token));
        dispatch(endLoading());
      } catch (error) {
        dispatch(setFeedComment(error.response.data.error));
        dispatch(setFeedVisible());
        dispatch(endLoading());
        throw error;
      }
    },
  }),
)(SigninForm);
