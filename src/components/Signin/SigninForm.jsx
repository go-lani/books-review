import React, { useState } from "react";
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
  const [info, setInfo] = useState({
    email: null,
    password: null,
  });

  function onHandledChange(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  function onHandleSubmit(e) {
    signIn(info);
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
              name="email"
              placeHolder="Enter Your E-mail"
              onChange={onHandledChange}
              essential
              val={info.email}
            >
              E-MAIL
            </Inputs>
          </InputBox>
          <InputBox>
            <Inputs
              type="password"
              id="password"
              name="password"
              placeHolder="Enter Your Password"
              onChange={onHandledChange}
              val={info.password}
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
