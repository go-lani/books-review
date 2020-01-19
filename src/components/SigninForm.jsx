import React from "react";
import styled from "styled-components";
import Inputs from "./Input";
import Buttons from "../components/Button";

const FormBlock = styled.div`
  width: 50%;
  padding: 40px;
  background: #35475e;
`;

const Greeting = styled.p`
  font-size: 4rem;
  color: #fff;
`;

const FormArea = styled.form`
  margin: 50px 0 0;
`;

const InputBlock = styled.div`
  & + & {
    margin: 40px 0 0;
  }
`;

const SigninForm = props => {
  return (
    <FormBlock>
      <Greeting>Sign Up</Greeting>
      <FormArea>
        <fieldset>
          <legend className="hide">로그인 정보 입력영역</legend>
          <InputBlock>
            <Inputs
              type="email"
              id="email"
              placeHolder="Enter Your E-mail"
              essential
            >
              E-MAIL
            </Inputs>
          </InputBlock>
          <InputBlock>
            <Inputs
              type="password"
              id="password"
              placeHolder="Enter Your Password"
              essential
            >
              PASSWORD
            </Inputs>
          </InputBlock>
        </fieldset>
        <Buttons size="medium" width={200}>
          Sign In
        </Buttons>
      </FormArea>
    </FormBlock>
  );
};

export default SigninForm;
