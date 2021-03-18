import React from 'react';
import { Value, Label } from '../../types';
import { css } from '@emotion/react';

const select = css({
  width: '380px',
  height: '40px',
});

type Props = {
  onChange: (ev: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: Value; label: Label }[];
  value: string;
};

export const Select: React.FC<Props> = ({ onChange, options, value }) => {
  return (
    <select css={select} value={value} onChange={onChange}>
      {options.map((option, key) => {
        return (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};
