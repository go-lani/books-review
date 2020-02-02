import { GET_BOOKS, ADD_BOOK } from "../actions";

const initialState = [];

const books = (state = initialState, action) => {
  if (action.type === GET_BOOKS) {
    return action.books;
  } else if (action.type === ADD_BOOK) {
    return [...state, { ...action.book }];
  }
  return state;
};

export default books;
