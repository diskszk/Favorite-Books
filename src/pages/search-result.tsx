import React, { useCallback, useState } from 'react';
import { Input } from '../components/atmos/index';

const SearchResult = () => {
  const [name, setName] = useState('');
  const handleChangeName = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setName(ev.target.value);
    },
    [setName]
  );

  return (
    <div>
      <div></div>
    </div>
  );
};

export default SearchResult;
