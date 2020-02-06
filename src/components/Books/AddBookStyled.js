import styled from "styled-components";

export const InputBox = styled.div`
  & + & {
    margin: 25px 0 0;
  }
`;

export const Legend = styled.legend`
  display: block;
  width: 100%;
  margin: 0 0 40px;
  font-size: 3rem;
  color: #fff;
`;

export const ButtonBox = styled.div`
  margin: 50px 0 0;
`;
