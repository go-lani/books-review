import styled, { css, keyframes } from "styled-components";

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-34px);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(-34px);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-34px);
  }
`;

export const Feed = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  padding: 7px 20px;
  border-radius: 0 0 5px 5px;
  background: #f20f4b;
  font-size: 1.6rem;
  line-height: 20px;
  color: #fff;
  transform: translateX(-50%);
  animation-duration: 1.8s;
  animation-timing-function: ease;
  animation-name: ${slideDown};
  animation-fill-mode: both;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideUp};
    `}
`;
