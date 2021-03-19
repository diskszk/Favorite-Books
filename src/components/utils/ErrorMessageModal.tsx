import React, { useCallback } from 'react';
import { ModalWrapper } from '../../components/organisms';
import { Button } from '../../components/atmos';
import { css } from '@emotion/react';

const text = css({
  marginBottom: '4rem',
});

type Props = {
  errorMessage: string;
};

export const ErrorMessageModal: React.FC<Props> = ({ errorMessage }) => {
  const handleCloseModal = useCallback((_ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert('close!!');
  }, []);

  return (
    <ModalWrapper>
      <p css={text}>{errorMessage}</p>

      <Button label={'閉じる'} onClick={handleCloseModal} />
    </ModalWrapper>
  );
};
