import { combineReducers } from "redux";
import token from "./token";
import loading from "./loading";
import feed from "./feed";
import books from "./books";
import popup from "./popup";

const reducers = combineReducers({
  token,
  feed,
  books,
  loading,
  popup,
});

export default reducers;
