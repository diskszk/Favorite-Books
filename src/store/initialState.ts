import { LoadingStatus, ErrorStatus, Message, ModalStatus, Book } from '../lib/types';

export type RootStore = {
  loadingStatus: LoadingStatus;
  errorStatus: ErrorStatus;
  message: Message;
  modalStatus: ModalStatus;

  books: Book[] | null;
};

export const initialState: RootStore = {
  loadingStatus: {
    isLoading: false,
  },
  errorStatus: {
    isError: false,
    errorMessage: '',
    errorStatus: '',
  },
  message: {
    message: '',
  },
  modalStatus: {
    isOpen: false,
  },
  books: null,
};
