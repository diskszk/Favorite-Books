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
      <div>
        <Input
          required={false}
          maxLength={20}
          minLength={12}
          type={'text'}
          value={name}
          onChange={handleChangeName}
        />
      </div>
    </div>
  );
};

export default SearchResult;
