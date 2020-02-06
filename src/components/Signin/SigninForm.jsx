import React from "react";
import { useHistory } from "react-router-dom";
import Inputs from "../common/Input";
import Buttons from "../common/Button";
import A11yTitle from "../common/A11yTitle";
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

const SigninForm = ({ requestSignIn, feedVisible }) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();
  const history = useHistory();

  const passLogin = async e => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await requestSignIn(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormArea>
      <Greeting>SignIn</Greeting>
      <Form>
        <fieldset>
          <A11yTitle as="legend">로그인 정보 입력영역</A11yTitle>
          <InputBox>
            <Inputs
              ref={emailRef}
              type="email"
              id="email"
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
              placeHolder="Enter Your Password"
              essential
            >
              PASSWORD
            </Inputs>
          </InputBox>
        </fieldset>
        <ButtonBox>
          <Buttons size="medium" width={150} onClick={passLogin} color="green">
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
