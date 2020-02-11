import React from "react";
import SigninIntro from "../components/Signin/SigninIntro";
import A11yTitle from "../components/Common/A11yTitle";
import SigninFormContainer from "../containers/SigninFormContainer";
import { SignInWrapper, SignInInner, SigninArea } from "./SigninStyled";
import withAuth from "../hocs/withAuth";

const Signin = () => {
  return (
    <SignInWrapper>
      <A11yTitle>로그인 영역</A11yTitle>
      <SignInInner>
        <SigninArea>
          <SigninIntro />
          <SigninFormContainer />
        </SigninArea>
      </SignInInner>
    </SignInWrapper>
  );
};

export default withAuth(Signin, false);
