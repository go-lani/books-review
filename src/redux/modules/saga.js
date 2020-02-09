import { all } from "redux-saga/effects";
import { booksSaga } from "./books";
import { authSaga } from "./auth";

// 전체 saga
export default function* rootSaga() {
  yield all([booksSaga(), authSaga()]);
}
