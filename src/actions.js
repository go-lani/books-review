// TOKEN
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = token => ({
  type: SET_TOKEN,
  token,
});

export const removeToken = () => ({
  type: REMOVE_TOKEN,
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

// 책
export const GET_BOOKS = "GET_BOOKS";
export const ADD_BOOK = "ADD_BOOK";

export const getBooks = books => ({
  type: GET_BOOKS,
  books,
});

export const addBook = book => ({
  type: ADD_BOOK,
  book,
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
