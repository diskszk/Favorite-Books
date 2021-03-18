import React from 'react';
// import { css } from '@emotion/react';

type Props = {
  values: string[];
};

const Select: React.FC<Props> = ({ values = ['Please Select One'] }) => {
  return (
    <select>
      {values.map((value, key) => {
        return (
          <option key={key} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
