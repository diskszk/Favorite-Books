import { css } from '@emotion/react';
import React from 'react';
import { BookThumbnail } from '../atmos';

/* 
  title
  author
  thumbneil
  reviewAverage
  detailsPageUrl
  seriesName出版社
 */

const cardWrapper = css`
  width: 33%;
  background-color: skyblue;

  margin: 1.5rem;
  padding: 1rem;

  a {
    text-decoration: none;
  }
`;
const card = css`
  display: flex;
  justify-content: left;
`;
const cardInfo = css`
  margin-left: 1rem;
  line-height: 2.25rem;
`;

export const PostCard: React.FC = () => {
  const title = 'JOJOの奇妙な冒険';
  const author = '荒木清彦';
  // const thumbneil = '';
  const reviewAverage = '4.1';
  const detailsPageUrl = '/';
  const seriesName = '岩波出版';

  const persents = Math.trunc(Number(reviewAverage));
  const starts = new Array(persents).fill('★');
  const Rate = <>{starts.map((star) => star)}</>;

  return (
    <article css={cardWrapper}>
      <a href={detailsPageUrl}>
        <div css={card}>
          <div>
            <BookThumbnail />
          </div>
          <div css={cardInfo}>
            <h2>{title}</h2>
            <p>{seriesName}</p>
            <p>{author}</p>
            <p>評価: {Rate}</p>
          </div>
        </div>
      </a>
    </article>
  );
};
