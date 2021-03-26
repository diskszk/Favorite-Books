import React from 'react';
import { Button } from '../../atmos';

type Props = {
  handleChangeBooks: () => Promise<void>;
  isDisabled: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const SearchBookButton: React.FC<Props> = (props) => {
  const { handleChangeBooks, isDisabled, setPage } = props;

  const handleClick = () => {
    // 1ページ目を表示する
    setPage(1);
    handleChangeBooks();
  };

  return <Button label="検索する" onClick={handleClick} disabled={isDisabled} />;
};
