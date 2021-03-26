import React, { useEffect } from 'react';
import { Input, Select } from '../../atmos';
import { SearchBookType } from '../../../lib/types';
import { TITLE, AUTHOR, ISBN } from '../../../constants';
import { Space } from '../../common';

type Props = {
  value: string;
  searchType: SearchBookType;
  setDisable: (disable: React.SetStateAction<boolean>) => void;
  handleChangeSearchType: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  handleInputTitle: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchArea: React.FC<Props> = (props) => {
  const { value, searchType, setDisable, handleChangeSearchType, label, handleInputTitle } = props;

  useEffect(() => {
    if (value) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [setDisable, value]);

  return (
    <div>
      <Select
        value={searchType}
        onChange={handleChangeSearchType}
        options={[
          { value: TITLE, label: '書籍名' },
          { value: AUTHOR, label: '著者名' },
          { value: ISBN, label: 'ISBNコード' },
        ]}
      />
      <Space height={2} />
      <Input
        placeholder={`${label}を入力してください`}
        required={true}
        type={'text'}
        value={value}
        onChange={handleInputTitle}
      />
    </div>
  );
};
