import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { Book, SearchBookType } from '../../../lib/types';
import { BookCard } from '../../molecules';
import { RootStore } from '../../../store/initialState';
import { Pagination } from '../../common/Pagination';

const postCardWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;
const msg = css`
  line-height: 40px;
  h2 {
    font-size: 24px;
  }
`;

type Props = {
  setPage: (value: React.SetStateAction<number>) => void;
  currentPage: number;
  searchType: SearchBookType;
  value: string;
  handleChangeBooks: () => Promise<void>;
  totalPage: number;
};

export const BookList: React.FC<Props> = (props) => {
  const { setPage, currentPage, searchType, value, handleChangeBooks, totalPage } = props;

  const dispatch = useDispatch();
  const books = useSelector<RootStore, Book[]>((state) => state.books);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!books) {
      return;
    }

    // handleChangeBooks();
  }, [dispatch, searchType, value, currentPage, handleChangeBooks, books]);

  return (
    <>
      {/* 初期値null */}
      {books && (
        <>
          {isFirstRender.current && books.length < 1 ? (
            <div css={msg}>
              <h2>該当する書籍が見つかりませんでした</h2>
              <p>
                キーワードが正しく入力できているかを確かめるか、他のキーワードで試してください。
              </p>
            </div>
          ) : (
            <>
              <ul css={postCardWrapper}>
                {books.map((book: Book, key) => {
                  return (
                    <BookCard
                      key={key}
                      author={book.author}
                      title={book.title}
                      largeImageUrl={book.largeImageUrl}
                      seriesName={book.seriesName}
                      reviewAverage={book.reviewAverage}
                      itemUrl={book.itemUrl}
                      detailsPageUrl={'/'}
                    />
                  );
                })}
              </ul>
              <Pagination
                currentPage={currentPage}
                totalPage={totalPage}
                setPage={setPage}
                onChange={handleChangeBooks}
              />
            </>
          )}
        </>
      )}
    </>
  );
};
