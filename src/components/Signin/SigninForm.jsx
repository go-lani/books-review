import React, { useRef } from "react";
import Inputs from "../Common/Input";
import Buttons from "../Common/Button";
import A11yTitle from "../Common/A11yTitle";
import Feedback from "./Feedback";
import styled from "styled-components";
import media from "../../libs/MediaQuery";

export const FormArea = styled.div`
  width: 100%;
  padding: 40px;
  background: #35475e;

  ${media.tablet`
    width: 100%;
  `}

  ${media.desktop`
    width: 50%;
  `}
`;

export const Greeting = styled.p`
  font-size: 3rem;
  color: #fff;
`;

export const Form = styled.form`
  margin: 40px 0 0;
`;

export const InputBox = styled.div`
  & + & {
    margin: 40px 0 0;
  }
`;

export const ButtonBox = styled.div`
  margin: 30px 0 0;

  ${media.mobile`
    text-align: center;
  `}
`;

export const LoginMenu = styled.ul`
  margin: 30px 0 0;
  padding: 30px 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`;

export const Menu = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  & + & {
    margin: 20px 0 0;
  }

  ${media.mobile`
    flex-direction: column;
    button {
      margin: 20px 0 0;
    }
  `}
`;

export const Question = styled.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.5);
  padding: 0 10px 0 0;

  ${media.mobile`
    padding: 0;
  `}
`;

const SigninForm = ({ signIn, feedVisible }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  function onHandleSubmit(e) {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signIn({ email, password });

    e.preventDefault();
  }

  return (
    <FormArea>
      <Greeting>SignIn</Greeting>
      <Form onSubmit={onHandleSubmit}>
        <fieldset>
          <A11yTitle as="legend">로그인 정보 입력영역</A11yTitle>
          <InputBox>
            <Inputs
              type="email"
              id="email"
              ref={emailRef}
              placeHolder="Enter Your E-mail"
              val={emailRef.current && emailRef.current.value}
              defaultValue="publizm@gmail.com"
              essential
            >
              E-MAIL
            </Inputs>
          </InputBox>
          <InputBox>
            <Inputs
              type="password"
              id="password"
              ref={passwordRef}
              placeHolder="Enter Your Password"
              val={passwordRef.current && passwordRef.current.value}
              defaultValue="fcschool"
              essential
            >
              PASSWORD
            </Inputs>
          </InputBox>
        </fieldset>
        <ButtonBox>
          <Buttons size="medium" width={150} color="red">
            Sign In
          </Buttons>
        </ButtonBox>
      </Form>
      <LoginMenu>
        <Menu>
          <Question>Need to create an account?</Question>
          <Buttons width={100} color="pink" outline>
            SIGN UP
          </Buttons>
        </Menu>
        <Menu>
          <Question>Forgot your password?</Question>
          <Buttons width={100} color="pink" outline>
            RECOVERY
          </Buttons>
        </Menu>
      </LoginMenu>
      <Feedback visible={feedVisible} />
    </FormArea>
  );
};

export default SigninForm;
