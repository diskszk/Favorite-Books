import { Count, LoadingStatus, ErrorStatus, Message } from '../lib/types';

export type RootStore = {
  count: Count;
  loadingStatus: LoadingStatus;
  errorStatus: ErrorStatus;
  message: Message;
};

export const initialState: RootStore = {
  count: {
    value: 0,
  },
  loadingStatus: {
    isLoading: false,
  },
  errorStatus: {
    isError: false,
    message: '',
    status: 0,
    isModalOpen: false,
  },
  message: {
    message: '',
    isModalOpen: false,
  },
};
