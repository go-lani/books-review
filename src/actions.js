import BookService from "./service/BookService";
import AuthService from "./service/AuthService";
import { push } from "connected-react-router";

// TOKEN
export const SET_TOKEN = "SET_TOKEN";

export const setToken = token => ({
  type: SET_TOKEN,
  token,
});

// 로딩
export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

export const startLoading = () => ({
  type: START_LOADING,
});

export const endLoading = () => ({
  type: END_LOADING,
});

// 로그인 & 로그아웃
export const signInThunk = (email, password) => async dispatch => {
  try {
    dispatch(startLoading());

    const response = await AuthService.signIn(email, password);
    const { token } = response.data;

    localStorage.setItem("token", token);
    dispatch(setToken(token));
    dispatch(push("/"));
    dispatch(endLoading());
  } catch (error) {
    dispatch(setFeedComment(error.response.data.error));
    dispatch(setFeedVisible());
    dispatch(endLoading());
    throw error;
  }
};

export const signOutThunk = token => async dispatch => {
  AuthService.signOut(token);
  dispatch(setToken(null));
  localStorage.removeItem("token");
};

// 피드백
export const SET_FEED_COMMENT = "SET_FEED_COMMENT";
export const SET_FEED_VISIBLE = "SET_FEED_VISIBLE";

export const setFeedComment = comment => ({
  type: SET_FEED_COMMENT,
  comment,
});

export const setFeedVisible = () => ({
  type: SET_FEED_VISIBLE,
});

// 팝업
export const SHOW_POPUP = "SHOW_POPUP";
export const HIDE_POPUP = "HIDE_POPUP";

export const showPopup = () => ({
  type: SHOW_POPUP,
});

export const hidePopup = () => ({
  type: HIDE_POPUP,
});

// 책
export const GET_BOOKS = "GET_BOOKS";
export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";

export const getBooks = books => ({
  type: GET_BOOKS,
  books,
});

export const getBooksThunk = token => async dispatch => {
  try {
    const { data } = await BookService.getBooks(token);
    dispatch(getBooks(data));
  } catch (err) {
    console.log(err);
  }
};

export const addBook = book => ({
  type: ADD_BOOK,
  book,
});

export const addBookThunk = (
  token,
  title,
  message,
  author,
  url,
) => async dispatch => {
  try {
    const { data } = await BookService.addBook(
      token,
      title,
      message,
      author,
      url,
    );
    dispatch(hidePopup());
    dispatch(addBook(data));
  } catch (err) {
    console.log(err);
  }
};

export const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

export const removeBookThunk = (token, id) => async dispatch => {
  try {
    await BookService.removeBook(token, id);
    dispatch(removeBook(id));
  } catch (err) {
    console.log(err);
  }
};
