import React from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { styles } from '../../constants';

import { useSelector } from 'react-redux';
import { RootStore } from '../../store/initialState';
import { LoadingStatus } from '../../lib/types';

import { ErrorMessageModal, LoadingModal, MessageModal } from '../utils';
import { Header } from '../organisms';

const color = styles.color;

const main = css({
  width: '80%',
  backgroundColor: color.white,
  margin: '0 auto',
  border: '0px',
  borderRadius: '0 0 12px 12px',
});

export const Layout: React.FC = ({ children }) => {
  const { isLoading } = useSelector<RootStore, LoadingStatus>((state) => state.loadingStatus);

  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
          body {
            font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic   ProN', 'Hiragino Sans',
              Meiryo, sans-serif;
            font-size: 20px;
            font-weight: normal;
            background-color: #e4e4e4;
            white-space: pre-line;
          }
          a {
            text-decoration: none;
            cursor: pointer;
          }
          button {
            cursor: pointer;
          }
        `}
      />
      <Header />

      {/* Storeで管理すること */}
      {/* <ErrorMessageModal errorMessage={'エラーが発生しました。'} />
      <MessageModal message={'Message'} /> */}
      {isLoading && <LoadingModal label={'Loading...'} />}

      <main css={main}>{children}</main>
      <footer>フッター</footer>
    </>
  );
};
