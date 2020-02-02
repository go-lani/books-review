import { SET_FEED_COMMENT, SET_FEED_VISIBLE } from "../actions";

const initailState = {
  comment: null,
  visible: false,
};

const feed = (state = initailState, action) => {
  if (action.type === SET_FEED_COMMENT) {
    return {
      ...state,
      comment: action.comment,
    };
  } else if (action.type === SET_FEED_VISIBLE) {
    return {
      ...state,
      visible: !state.visible,
    };
  }
  return state;
};

export default feed;
