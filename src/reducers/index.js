import { combineReducers } from "redux";
import token from "./token";
import loading from "./loading";
import feed from "./feed";

const reducers = combineReducers({
  token,
  loading,
  feed,
});

export default reducers;
