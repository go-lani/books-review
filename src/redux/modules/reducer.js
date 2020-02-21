import { combineReducers } from "redux";
import books from "./books";
import auth from "./auth";
import popup from "./popup";
import { connectRouter } from "connected-react-router";

const reducer = history =>
  combineReducers({
    books,
    auth,
    popup,
    router: connectRouter(history),
  });

export default reducer;
