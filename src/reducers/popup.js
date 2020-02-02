import { SHOW_POPUP, HIDE_POPUP } from "../actions";

const initialState = false;

const popup = (state = initialState, action) => {
  if (action.type === SHOW_POPUP) {
    return true;
  } else if (action.type === HIDE_POPUP) {
    return false;
  }

  return state;
};

export default popup;
