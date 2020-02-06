import styled from "styled-components";
import media from "../libs/MediaQuery";

export const SignInWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #28343d;
  font-size: 20px;
`;

export const SignInInner = styled.div`
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

export const SigninArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  ${media.mobile`
    flex-direction: column;
  `}
`;
