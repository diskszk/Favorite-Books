import React from 'react';
import { ModalWrapper } from '../organisms';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from '../atmos';

type Props = {
  label: string;
};

export const LoadingModal: React.FC<Props> = ({ label }) => {
  return (
    <ModalWrapper>
      <CircularProgress disableShrink />
      <p>{label}</p>
      <Button label={'閉じる'} onClick={() => alert('close')} />
    </ModalWrapper>
  );
};
