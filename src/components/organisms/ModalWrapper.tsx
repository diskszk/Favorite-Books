import React from 'react';
import { css } from '@emotion/react';
import { styles } from '../../constants';
// import { Button } from '../atmos';
// import { Spacer } from '../utils/Spacer';

const { color } = styles;
const background = css({
  position: 'fixed',
  top: '0%',
  left: '0%',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const modal = css({
  height: '16rem',
  width: '44%',
  padding: '1rem',

  position: 'absolute',
  top: '12rem',

  textAlign: 'center',

  backgroundColor: color.white,
  border: '0',
  borderRadius: '1rem',
});
const content = css({
  height: '60%',
  padding: '3rem',
});

export const ModalWrapper: React.FC = ({ children }) => {
  return (
    <div css={background}>
      <div css={modal}>
        <div css={content}>{children}</div>
      </div>
    </div>
  );
};
