import React from 'react';
import { Header } from '../organisms';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

const main = css({});

export const Layout: React.FC = ({ children }) => {
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
            font-size: 18px;
            background-color: #e4e4e4;
          }
          a {
            text-decoration: none;
          }
        `}
      />
      <Header />
      <main css={main}>{children}</main>
      <footer>フッター</footer>
    </>
  );
};
