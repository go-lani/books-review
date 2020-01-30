import { START_LOADING, END_LOADING } from "../actions";

const initailState = false;

const loading = (state = initailState, action) => {
  if (action.type === START_LOADING) {
    return true;
  } else if (action.type === END_LOADING) {
    return false;
  }
  return state;
};

export default loading;
