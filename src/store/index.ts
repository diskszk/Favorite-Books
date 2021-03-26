import { createStore as reduxCreateStore, combineReducers, applyMiddleware, Store } from 'redux';
import logger from 'redux-logger';

import { LoadingStatusReducer } from './LoadingStatusReducer';
import { ModalStatusReducer } from './ModalStatusReducer';
import { DisplayMessageReducer } from './DisplayMessageReducer';
import { ErrorStatusReducer } from './ErrorStatusReducer';
import { BooksReducer } from './BooksReducer';

export const createStore = (): Store => {
  return reduxCreateStore(
    combineReducers({
      modalStatus: ModalStatusReducer,
      loadingStatus: LoadingStatusReducer,
      displayMessage: DisplayMessageReducer,
      errorStatus: ErrorStatusReducer,

      books: BooksReducer,
    }),
    applyMiddleware(logger)
  );
};
