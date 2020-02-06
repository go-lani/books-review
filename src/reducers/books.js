import { GET_BOOKS, ADD_BOOK, REMOVE_BOOK } from "../actions";

const initialState = [];

const books = (state = initialState, action) => {
  if (action.type === GET_BOOKS) {
    return action.books;
  } else if (action.type === ADD_BOOK) {
    return [...state, { ...action.book }];
  } else if (action.type === REMOVE_BOOK) {
    return state.filter(book => book.bookId !== action.id);
  }
  return state;
};

export default books;
