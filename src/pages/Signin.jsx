import React from "react";
import styled from "styled-components";
import media from "../libs/MediaQuery";
import SigninIntro from "../components/SigninIntro";
import SigninForm from "../components/SigninForm";

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
  width: 80%;
  border-radius: 10px;

  ${media.tablet`
    width: 80%;
  `}

  ${media.desktop`
    width: 60%;
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
      <h1 className="hide">로그인 영역</h1>
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
