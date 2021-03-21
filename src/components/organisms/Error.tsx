import { css } from '@emotion/react';
import React from 'react';
import { useDispatch } from 'react-redux';
// import { getApple } from '../../lib/api/getApple';
import { searchBooks } from '../../lib/api/rakutenBooks';
import { createDisplayErrorMessageAction } from '../../store/ErrorStatusReducer';
import { createOpenModalAction } from '../../store/ModalStatusReducer';
import { BookThumbnail } from '../atmos';
import { PostCard } from '../molecules';

const postCardWrapper = css`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  justify-content: center;
  flex-wrap: wrap;
`;

const Error: React.FC = () => {
  const dispatch = useDispatch();

  const handleError = async () => {
    try {
      const books = await searchBooks('isbn', '9784003101032');

      console.log(books[0].Item.title);
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
  };

  return (
    <React.Fragment>
      <button onClick={handleError}>Error</button>
      <br />
      {/* larg thumbneil is good */}
      <BookThumbnail
        src={
          'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/1032/9784003101032.jpg?_ex=200x200'
        }
      />
      <br />
      <div css={postCardWrapper}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </React.Fragment>
  );
};

export default Error;
