import React from 'react';
import { useDispatch } from 'react-redux';
// import { getApple } from '../../lib/api/getApple';
import { searchBooks } from '../../lib/api/rakutenBooks';
import { createDisplayErrorMessageAction } from '../../store/ErrorStatusReducer';
import { createOpenModalAction } from '../../store/ModalStatusReducer';

const Error: React.FC = () => {
  const dispatch = useDispatch();

  const handleError = async () => {
    try {
      // const data = await getApple();
      // const books = await searchBooks('title', '坊ちゃん');
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
    </React.Fragment>
  );
};

export default Error;
