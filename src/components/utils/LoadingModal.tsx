import React from 'react';
import { ModalWrapper } from '../organisms';
import CircularProgress from '@material-ui/core/CircularProgress';
import { css } from '@emotion/react';

const text = css({
  marginTop: '1.5rem',
});

type Props = {
  label: string;
};

export const LoadingModal: React.FC<Props> = ({ label }) => {
  return (
    <ModalWrapper>
      <CircularProgress disableShrink size={100} />
      <p css={text}>{label}</p>
    </ModalWrapper>
  );
};
