import { put, takeLatest } from "redux-saga/effects";
import { createAction, createActions, handleActions } from "redux-actions";

const options = {
  prefix: "books-review/popup",
};

const initialState = {
  addPopupVisible: false,
  error: null,
};

// action creator
const { showadd, hideadd, fail } = createActions(
  "SHOWADD",
  "HIDEADD",
  "FAIL",
  options,
);

// reducer
const popup = handleActions(
  {
    SHOWADD: (state, action) => ({
      addPopupVisible: true,
      error: null,
    }),
    HIDEADD: (state, action) => ({
      addPopupVisible: false,
      error: null,
    }),
  },
  initialState,
  options,
);

function* showAddPopup() {
  try {
    yield put(showadd());
  } catch (error) {
    yield put(fail(error));
  }
}

function* hideAddPopup() {
  try {
    yield put(hideadd());
  } catch (error) {
    yield put(fail(error));
  }
}

export const showAddPopupSaga = createAction("SHOW_ADD_POPUP_SAGA");
export const hideAddPopupSaga = createAction("HIDE_ADD_POPUP_SAGA");

export function* popupSaga() {
  yield takeLatest("SHOW_ADD_POPUP_SAGA", showAddPopup);
  yield takeLatest("HIDE_ADD_POPUP_SAGA", hideAddPopup);
}

export default popup;
