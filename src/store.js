import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default function create(initailState) {
  return createStore(
    reducers,
    initailState,
    composeWithDevTools(applyMiddleware(thunk)),
  );
}
