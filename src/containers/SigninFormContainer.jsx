import { connect } from "react-redux";
import SigninForm from "../components/Signin/SigninForm";
import { signInSaga } from "../redux/modules/auth";

export default connect(
  state => ({
    feedVisible: state.auth.feedVisible,
  }),
  dispatch => ({
    signIn: async info => {
      dispatch(signInSaga(info));
    },
  }),
)(SigninForm);
