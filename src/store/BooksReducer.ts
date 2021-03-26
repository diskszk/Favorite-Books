import { Book } from '../lib/types';
import { initialState } from './initialState';

const UPDATE_BOOKS = 'UPDATE_BOOKS';
const CLEAR_BOOKS = 'CLEAR_BOOKS';

type UpdateBooksAction = {
  type: typeof UPDATE_BOOKS;
  payload: Book[];
};
type ClearBooksAction = {
  type: typeof CLEAR_BOOKS;
  payload: Book[] | null;
};

type BooksActions = UpdateBooksAction | ClearBooksAction;

export const createUpdateBooksAction = (state: Book[]): BooksActions => {
  return {
    type: UPDATE_BOOKS,
    payload: [...state],
  };
};
export const createClearBooksAction = (): BooksActions => {
  return {
    type: CLEAR_BOOKS,
    payload: initialState.books,
  };
};

export const BooksReducer = (state = initialState.books, action: BooksActions): Book[] => {
  switch (action.type) {
    case UPDATE_BOOKS:
      return [...action.payload];

    case CLEAR_BOOKS:
      return action.payload;
    default:
      return state;
  }
};
