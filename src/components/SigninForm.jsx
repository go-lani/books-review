import React from "react";
import styled from "styled-components";
import Inputs from "./Input";
import Buttons from "../components/Button";
import A11yTitle from "../components/A11yTitle";
import media from "../libs/MediaQuery";

const FormArea = styled.div`
  width: 100%;
  padding: 40px;
  background: #35475e;

  ${media.tablet`
    width: 50%;
  `}

  ${media.desktop`
    width: 50%;
  `}
`;

const Greeting = styled.p`
  font-size: 3rem;
  color: #fff;
`;

const Form = styled.form`
  margin: 40px 0 0;
`;

const InputBox = styled.div`
  & + & {
    margin: 40px 0 0;
  }
`;

const ButtonBox = styled.div`
  margin: 30px 0 0;

  ${media.mobile`
    text-align: center;
  `}
`;

const LoginMenu = styled.ul`
  margin: 30px 0 0;
  padding: 30px 0 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
`;

const Menu = styled.li`
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

const Question = styled.p`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.5);
  padding: 0 10px 0 0;

  ${media.mobile`
    padding: 0;
  `}
`;

const SigninForm = () => {
  return (
    <FormArea>
      <Greeting>SignIn</Greeting>
      <Form>
        <fieldset>
          <A11yTitle as="legend">로그인 정보 입력영역</A11yTitle>
          <InputBox>
            <Inputs
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
          <Buttons size="medium" width={150} color="green">
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
    </FormArea>
  );
};

export default SigninForm;
