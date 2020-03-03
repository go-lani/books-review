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
