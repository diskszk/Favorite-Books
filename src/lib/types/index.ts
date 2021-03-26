export type Label = '書籍名' | '著者名' | 'ISBNコード';
export type SearchBookType = 'title' | 'author' | 'isbn';

// Redux
export type Count = {
  value: number;
};

export type LoadingStatus = {
  isLoading: boolean;
};
export type ErrorStatus = {
  isError: boolean;
  errorMessage: string;
  errorStatus: string;
};
export type Message = {
  message: string;
};
export type ModalStatus = {
  isOpen: boolean;
};

// RakutenAPI
export type Book = {
  limitedFlag: number;
  author: string;
  subTitle: string;
  title: string;
  publisherName: string;
  isbn: string;
  largeImageUrl: string;
  size: string;
  seriesName: string;
  reviewAverage: string;
  itemUrl: string;
};
