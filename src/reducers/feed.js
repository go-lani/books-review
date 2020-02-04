import { SET_FEED_COMMENT, SET_FEED_VISIBLE } from "../actions";

const initailState = {
  comment: null,
  visible: false,
};

const feed = (state = initailState, action) => {
  if (action.type === SET_FEED_COMMENT) {
    if (action.comment === "USER_NOT_EXIST") {
      return {
        ...state,
        comment: "해당하는 유저가 없습니다.",
      };
    } else if (action.comment === "PASSWORD_NOT_MATCH") {
      return {
        ...state,
        comment: "비밀번호가 틀렸습니다.",
      };
    } else {
      return {
        ...state,
        comment: "로그인에 문제가 있습니다.",
      };
    }
  } else if (action.type === SET_FEED_VISIBLE) {
    return {
      ...state,
      visible: !state.visible,
    };
  }
  return state;
};

export default feed;
