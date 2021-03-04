import { createStore as reduxCreateStore, combineReducers, applyMiddleware, Store } from 'redux';
import logger from 'redux-logger';

import { CountReducer } from './CountReducer';

export const createStore = (): Store => {
  return reduxCreateStore(
    combineReducers({
      count: CountReducer,
    }),
    applyMiddleware(logger)
  );
};
