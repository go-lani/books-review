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
        if (error.response.data.error === "USER_NOT_EXIST") {
          dispatch(setFeedComment("해당하는 유저가 없습니다."));
        } else if (error.response.data.error === "PASSWORD_NOT_MATCH") {
          dispatch(setFeedComment("비밀번호가 틀렸습니다."));
        } else {
          dispatch(setFeedComment("로그인에 문제가 있습니다."));
        }
        dispatch(setFeedVisible());
        dispatch(endLoading());
      }
    },
  }),
)(SigninForm);
