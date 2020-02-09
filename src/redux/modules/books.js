import { select, put, call, takeLatest } from "redux-saga/effects";
import { createAction, createActions, handleActions } from "redux-actions";
import BookService from "../../service/BookService";

const options = {
  prefix: "reactjs-books-review/books",
};

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const { success, pending, fail } = createActions(
  {
    SUCCESS: books => ({ books }),
  },
  "PENDING",
  "FAIL",
);

const books = handleActions(
  {
    PENDING: (state, action) => ({
      books: [],
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      books: action.payload.books,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      books: [],
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  options,
);

function* getBooksSaga() {
  const token = yield select(state => state.auth.token);
  console.log(token);

  try {
    yield put(pending());
    const res = yield call(BookService.getBooks, token);
    yield put(success(res.data));
  } catch (error) {
    yield put(fail(error));
  }
}

export const startBooksSaga = createAction("START_BOOKS_SAGA");

export function* booksSaga() {
  yield takeLatest("START_BOOKS_SAGA", getBooksSaga);
}

export default books;
