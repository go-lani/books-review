import React from "react";
import SigninIntro from "../components/Signin/SigninIntro";
import A11yTitle from "../components/common/A11yTitle";
import SigninForm from "../components/Signin/SigninForm";
import { SignInWrapper, SignInInner, SigninArea } from "./SigninStyled";

const Signin = () => {
  return (
    <SignInWrapper>
      <A11yTitle>로그인 영역</A11yTitle>
      <SignInInner>
        <SigninArea>
          <SigninIntro />
          <SigninForm />
        </SigninArea>
      </SignInInner>
    </SignInWrapper>
  );
};

export default Signin;
