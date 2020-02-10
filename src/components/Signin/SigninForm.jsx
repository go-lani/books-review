import React from "react";
import Inputs from "../common/Input";
import Buttons from "../common/Button";
import A11yTitle from "../common/A11yTitle";
import Feedback from "./Feedback";
import { useDispatch } from "react-redux";
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
import { signInSaga } from "../../redux/modules/auth";

const SigninForm = ({ feedVisible }) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const dispatch = useDispatch();

  const onHandleSubmit = e => {
    e.preventDefault();

    const info = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    dispatch(signInSaga(info));
  };

  return (
    <FormArea>
      <Greeting>SignIn</Greeting>
      <Form onSubmit={onHandleSubmit}>
        <fieldset>
          <A11yTitle as="legend">로그인 정보 입력영역</A11yTitle>
          <InputBox>
            <Inputs
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              placeHolder="Enter Your E-mail"
              essential
            >
              E-MAIL
            </Inputs>
          </InputBox>
          <InputBox>
            <Inputs
              ref={passwordRef}
              type="password"
              id="password"
              name="password"
              placeHolder="Enter Your Password"
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
