import { createStore } from "redux";
import reducers from "./reducers";

export default function create(initailState) {
  return createStore(
    reducers,
    initailState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
