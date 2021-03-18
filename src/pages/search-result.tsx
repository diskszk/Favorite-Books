import React, { useCallback, useState } from 'react';
import Input from 'src/components/atmos/Input';
import Select from 'src/components/atmos/select';

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
        <Select values={['apple', 'orange', 'grape']} />
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
