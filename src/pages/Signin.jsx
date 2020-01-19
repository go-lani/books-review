import React from "react";
import styled from "styled-components";
import media from "../libs/MediaQuery";

const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ccc;
  font-size: 20px;

  ${media.mobile`
    background: red;
  `}

  ${media.tablet`
    background: green;
  `}

  ${media.desktop`
    background: yellow;
    color: ${props => props.color};
  `}
`;

const SignInBox = styled.div`
  width: 45%;
  /* min-width: 300px; */
  height: 400px;
  background: #fff;
`;

const Signin = () => {
  return (
    <SignInWrapper color="purple">
      heqdwqdwq
      <SignInBox>dwq</SignInBox>
    </SignInWrapper>
  );
};

export default Signin;
