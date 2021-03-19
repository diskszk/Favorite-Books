import { LoadingStatus } from '../lib/types';
import { initialState } from './initialState';

const FETCH_REQUEST = 'FETCH_REQUEST';
const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
const FAIL_REQUEST = 'FAIL_REQUEST';

type FetchRequestAction = {
  type: typeof FETCH_REQUEST;
};
type SuccessRequestAction = {
  type: typeof SUCCESS_REQUEST;
};
type FailRequestAction = {
  type: typeof FAIL_REQUEST;
};

type LoadingStatusActions = FetchRequestAction | SuccessRequestAction | FailRequestAction;

export const createFetchRequestAction = (): LoadingStatusActions => {
  return {
    type: FETCH_REQUEST,
  };
};
export const createSuccessRequest = (): LoadingStatusActions => {
  return {
    type: SUCCESS_REQUEST,
  };
};
export const createFailRequestAction = (): LoadingStatusActions => {
  return {
    type: FAIL_REQUEST,
  };
};

export const LoadingStatusReducer = (
  state = initialState.loadingStatus,
  action: LoadingStatusActions
): LoadingStatus => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUCCESS_REQUEST:
      return {
        ...state,
        isLoading: false,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
