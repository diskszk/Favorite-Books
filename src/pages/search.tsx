import React, { useCallback, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { SearchArea, BookList, SearchBookButton } from '../components/organisms/search';
import { Space } from '../components/common';
import { searchBooks } from '../lib/api/rakutenBooks';
import { createClearBooksAction, createUpdateBooksAction } from '../store/BooksReducer';
import { createDisplayErrorMessageAction } from '../store/ErrorStatusReducer';
import { createStartLoadingAction, createStopLoadingAction } from '../store/LoadingStatusReducer';
import { createOpenModalAction, createCloseModalAction } from '../store/ModalStatusReducer';
import { SearchBookType, Label } from '../lib/types';
import { TITLE, ISBN, AUTHOR } from '../constants';
import { useDispatch } from 'react-redux';

const container = css({
  padding: '40px 0',
  textAlign: 'center',
});

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const [searchType, setSearchType] = useState<SearchBookType>(TITLE);
  const [label, setLabel] = useState<Label>('書籍名');
  const [value, setValue] = useState('');
  const [isDisabled, setDisable] = useState(true);
  const [currentPage, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const handleChangeSearchType = useCallback((ev: React.ChangeEvent<HTMLSelectElement>): void => {
    switch (ev.target.value) {
      case ISBN:
        setSearchType(ev.target.value);
        setLabel('ISBNコード');
        break;
      case AUTHOR:
        setSearchType(ev.target.value);
        setLabel('著者名');
        break;
      case TITLE:
        setSearchType(ev.target.value);
        setLabel('書籍名');
        break;
      default:
        break;
    }
  }, []);

  const handleInputTitle = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>): void => {
      setValue(ev.target.value);
    },
    [setValue]
  );

  const handleChangeBooks = useCallback(async (): Promise<void> => {
    try {
      dispatch(createStartLoadingAction());
      dispatch(createOpenModalAction());
      const res = await searchBooks(searchType, value, currentPage);

      console.log('API called');

      console.log(res);

      setTotalPage(res.pageCount);
      const books = res.Items;

      dispatch(createUpdateBooksAction(books));

      dispatch(createCloseModalAction());
      dispatch(createStopLoadingAction());
    } catch (err) {
      dispatch(
        createDisplayErrorMessageAction({
          isError: true,
          errorMessage: err.message,
          errorStatus: '500',
        })
      );
      dispatch(createOpenModalAction());
    }
  }, [dispatch, currentPage, searchType, value]);

  useEffect(() => {
    return () => {
      dispatch(createClearBooksAction());
    };
  }, [dispatch]);

  return (
    <section css={container}>
      <SearchArea
        value={value}
        searchType={searchType}
        setDisable={setDisable}
        handleChangeSearchType={handleChangeSearchType}
        label={label}
        handleInputTitle={handleInputTitle}
      />
      <Space />

      <SearchBookButton
        setPage={setPage}
        handleChangeBooks={handleChangeBooks}
        isDisabled={isDisabled}
      />
      <Space />

      <BookList
        setPage={setPage}
        currentPage={currentPage}
        searchType={searchType}
        value={value}
        handleChangeBooks={handleChangeBooks}
        totalPage={totalPage}
      />
    </section>
  );
};

export default Search;
