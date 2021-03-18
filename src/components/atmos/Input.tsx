import React from 'react';
// import { css } from '@emotion/react';

type Props = {
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  required: boolean;
  type: 'email' | 'number' | 'password' | 'search' | 'text';
  value: string;

  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = ({
  maxLength = 255,
  minLength = 0,
  placeholder = '',
  required,
  type,
  value,
  onChange,
}) => {
  return (
    <input
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
