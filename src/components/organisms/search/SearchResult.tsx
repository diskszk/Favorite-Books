import React from 'react';
import { css } from '@emotion/react';
import { Book } from '../../../lib/types';
import { PostCard } from '../../molecules';

const postCardWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

type Props = {
  books: Book[];
};

export const SearchResult: React.FC<Props> = ({ books }) => {
  return (
    <>
      {/* 検索失敗時の処理 */}
      {!books ? (
        <h2>なにもみつからない。。。</h2>
      ) : (
        <ul css={postCardWrapper}>
          {books.map((book: Book, key) => {
            const item = book.Item;

            return (
              <PostCard
                key={key}
                author={item.author}
                title={item.title}
                largeImageUrl={item.largeImageUrl}
                seriesName={item.seriesName}
                reviewAverage={item.reviewAverage}
                itemUrl={item.itemUrl}
                detailsPageUrl={'/'}
              />
            );
          })}
        </ul>
      )}
    </>
  );
};
