import { css } from '@emotion/react';
import React, { useCallback } from 'react';
import { STYLES } from '../../constants';

const { COLOR } = STYLES;

const container = css`
  max-width: 400px;
  margin: 48px auto 0 auto;
  display: flex;
  justify-content: space-around;
`;

const paginationButton = css`
  transition: 0.25s;
  width: 100px;
  height: 40px;
  background-color: ${COLOR.WHITE};
  border: 0;
  box-shadow: 1px 1px 2px rgba(100, 100, 100, 0.4);
  border-radius: 4px;
`;

type Props = {
  currentPage: number;
  totalPage: number;
  setPage: (value: React.SetStateAction<number>) => void;
  onChange: () => Promise<void>;
};

export const Pagination: React.FC<Props> = (props) => {
  const { currentPage, totalPage, setPage, onChange: handleChangeBooks } = props;

  const handleForward = useCallback(async () => {
    setPage(currentPage + 1);
    await handleChangeBooks();
    window.scrollTo(0, 335);
  }, [currentPage, setPage, handleChangeBooks]);

  const handleBack = useCallback(async () => {
    setPage(currentPage - 1);
    await handleChangeBooks();
    window.scrollTo(0, 355);
  }, [currentPage, setPage, handleChangeBooks]);

  if (totalPage > 1) {
    return (
      <nav css={container}>
        {currentPage !== 1 && (
          <button css={paginationButton} onClick={handleBack}>
            ← 戻る
          </button>
        )}
        {currentPage !== totalPage && (
          <button css={paginationButton} onClick={handleForward}>
            次のページ →
          </button>
        )}
      </nav>
    );
  } else {
    return <></>;
  }
};
