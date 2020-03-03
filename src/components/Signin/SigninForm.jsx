import React, { useRef } from "react";
import Inputs from "../Common/Input";
import Buttons from "../Common/Button";
import A11yTitle from "../Common/A11yTitle";
import Feedback from "./Feedback";
import {
  FormArea,
  Greeting,
  Form,
  InputBox,
  ButtonBox,
  LoginMenu,
  Menu,
  Question,
} from "./SigninFormStyled";

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
