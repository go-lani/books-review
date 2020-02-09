import { select, put, call, takeLatest } from "redux-saga/effects";
import { createAction, createActions, handleActions } from "redux-actions";
import AuthService from "../../service/AuthService";
import { push } from "connected-react-router";

const options = {
  prefix: "reactjs-books-review/auth",
};

const initialState = {
  token: null,
  loading: true,
  error: null,
};

const { add, pending, remove, fail } = createActions(
  {
    ADD: token => ({ token }),
  },
  "PENDING",
  "REMOVE",
  "FAIL",
);

const auth = handleActions(
  {
    PENDING: (state, action) => ({
      token: null,
      loading: true,
      error: null,
    }),
    ADD: (state, action) => ({
      token: action.payload.token,
      loading: false,
      error: null,
    }),
    REMOVE: (state, action) => ({
      token: null,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      token: null,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  options,
);

function* addTokenSaga(action) {
  try {
    yield put(pending());
    const res = yield call(AuthService.signIn, action.payload);
    const { token } = res.data;
    yield put(add(token));
    localStorage.setItem("token", token);
    yield put(push("/"));
  } catch (error) {
    yield put(fail(error));
  }
}

function* removeTokenSaga(action) {
  const token = yield select(state => state.auth.token);
  try {
    yield put(pending());
    yield put(remove());
    yield call(AuthService.signOut, token);
    localStorage.removeItem("token");
  } catch (error) {
    yield put(fail(error));
  }
}

export const startTokenSaga = createAction("START_TOKEN_SAGA");
export const endTokenSaga = createAction("END_TOKEN_SAGA");

export function* authSaga() {
  yield takeLatest("START_TOKEN_SAGA", addTokenSaga);
  yield takeLatest("END_TOKEN_SAGA", removeTokenSaga);
}

export default auth;
