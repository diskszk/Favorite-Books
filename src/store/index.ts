import { createStore as reduxCreateStore, combineReducers, applyMiddleware, Store } from 'redux';
import logger from 'redux-logger';

import { CountReducer } from './CountReducer';
import { LoadingStatusReducer } from './LoadingStatusReducer';

export const createStore = (): Store => {
  return reduxCreateStore(
    combineReducers({
      count: CountReducer,
      loadingStatus: LoadingStatusReducer,
    }),
    applyMiddleware(logger)
  );
};
