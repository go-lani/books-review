import React from "react";
import { StyledNoneItem } from "./NoneItemStyled";

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
