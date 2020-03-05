import React from "react";
import styled from "styled-components";

export const StyledNoneItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;

  img {
    width: 80px;
  }

  p {
    margin: 0 0 0 20px;
    font-size: 2.5rem;
  }
`;

const NoneItem = () => {
  return (
    <StyledNoneItem>
      <img src="/notice_icon.png" alt="!" />
      <p>
        책이 존재하지 않습니다.
        <br />
        책을 추가해주세요
      </p>
    </StyledNoneItem>
  );
};

export default NoneItem;
