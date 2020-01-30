import React from "react";
import styled from "styled-components";
import media from "../libs/MediaQuery";
import SigninIntro from "../components/Signin/SigninIntro";
// import SigninForm from '../components/Signin/SigninForm';
import A11yTitle from "../components/A11yTitle";
import SigninFormContainer from "../containers/SigninFormContainer";

const SignInWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #28343d;
  font-size: 20px;
`;

const SignInInner = styled.div`
  overflow: hidden;
  width: 85%;
  border-radius: 10px;

  ${media.tablet`
    width: 80%;
  `}

  ${media.desktop`
    width: 55%;
  `}
`;

const SigninArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  ${media.mobile`
    flex-direction: column;
  `}
`;

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

export default Signin;
