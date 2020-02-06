import { SET_TOKEN } from "../actions";

const initialState = null;

const token = (state = initialState, action) => {
  if (action.type === SET_TOKEN) {
    return action.token;
  }
  return state;
};

export default token;
