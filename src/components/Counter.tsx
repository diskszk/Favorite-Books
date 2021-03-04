import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createDecrementAction, createIncrementAction } from 'src/store/CountReducer';
import { Count, RootStore } from 'src/store/initialState';
import { css } from '@emotion/react';

const wrapper = css({
  display: 'flex',
  flexDirection: 'row',
  width: 400,
  margin: '0 auto',
});
const button = css({
  width: 64,
  height: 28,
  backgroundColor: 'white',
  marginRight: 18,
});

export const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const { value } = useSelector<RootStore, Count>((state) => state.count);

  const handleClickIncrementButton = useCallback(
    (_ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      dispatch(createIncrementAction());
    },
    [dispatch]
  );
  const handleClickDecrementButton = useCallback(
    (_ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      dispatch(createDecrementAction());
    },
    [dispatch]
  );

  return (
    <div>
      <p>count: {value}</p>
      <div css={wrapper}>
        <button css={button} onClick={handleClickIncrementButton}>
          +
        </button>
        <button css={button} onClick={handleClickDecrementButton}>
          -
        </button>
      </div>
    </div>
  );
};
