import React, { useState, useEffect } from "react";
import { Feed } from "./FeedbackStyled";
import { useSelector } from "react-redux";

const Feedback = ({ visible }) => {
  const [localVisible, setLocalVisible] = useState(visible);
  const feedMessage = useSelector(state => state.auth.feedMessage);

  const comment = () => {
    if (feedMessage === "USER_NOT_EXIST") {
      return "존재하지 않는 아이디입니다.";
    } else if (feedMessage === "PASSWORD_NOT_MATCH") {
      return "비밀번호를 확인해주세요.";
    }
  };

  useEffect(() => {
    let hide;

    if (localVisible) {
      hide = setTimeout(() => {
        clearTimeout(hide);
      }, 1800);
    }

    setLocalVisible(visible);

    return () => {
      clearTimeout(hide);
    };
  }, [visible, localVisible]);

  if (!localVisible) return null;

  return <Feed>{comment()}</Feed>;
};

export default Feedback;
