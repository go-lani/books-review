import { select, put, call, takeLatest } from "redux-saga/effects";
import { createAction, createActions, handleActions } from "redux-actions";
import BookService from "../../service/BookService";

const options = {
  prefix: "books-review/books",
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
  options,
);

const books = handleActions(
  {
    PENDING: (state, action) => ({
      books: state.books ? state.books : [],
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

function* getBooks() {
  const token = yield select(state => state.auth.token);

  try {
    yield put(pending());
    const res = yield call(BookService.getBooks, token);
    yield put(success(res.data));
  } catch (error) {
    yield put(fail(error));
  }
}

function* addBook(action) {
  const token = yield select(state => state.auth.token);
  const books = yield select(state => state.books.books);
  const { title, message, author, url } = action.payload;

  try {
    yield put(pending());
    const { data } = yield call(
      BookService.addBook,
      token,
      title,
      message,
      author,
      url,
    );

    yield put(success([...books, data]));
  } catch (error) {
    yield put(fail(error));
  }
}

function* removeBook(action) {
  const token = yield select(state => state.auth.token);
  const books = yield select(state => state.books.books);
  const id = action.payload;

  const newBooks = books.filter(book => book.bookId !== id);

  try {
    yield put(pending());
    yield call(BookService.removeBook, token, id);
    yield put(success(newBooks));
  } catch (error) {
    yield put(fail(error));
  }
}

export const getBooksSaga = createAction("GET_BOOKS_SAGA");
export const addBookSaga = createAction("ADD_BOOKS_SAGA");
export const removeBookSaga = createAction("REMOVE_BOOKS_SAGA");

export function* booksSaga() {
  yield takeLatest("GET_BOOKS_SAGA", getBooks);
  yield takeLatest("ADD_BOOKS_SAGA", addBook);
  yield takeLatest("REMOVE_BOOKS_SAGA", removeBook);
}

export default books;
