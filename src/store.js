import { createStore } from "redux";
import reducers from "./reducers";

// const token = localStorage.getItem('token');
// const store = createStore(reducer, token);

// 모듈을 불러올때 초기값 세팅을 원하는 타이밍에 세팅하도록 지연시키기 위해 function으로 export
export default function create(initailState) {
  return createStore(
    reducers,
    initailState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
