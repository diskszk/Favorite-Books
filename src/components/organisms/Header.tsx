import React from 'react';
import { css } from '@emotion/react';

const header = css({
  height: 64,
  backgroundColor: 'lightgreen',

  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 32px',
});

const title = css({
  lineHeight: '64px',
  fontSize: '24px',
  color: '#fefefe',
});

export const Header: React.FC = () => {
  return (
    <header css={header}>
      <div>
        <a css={title} href="/">
          My Favorite Books
        </a>
      </div>
      <div>
        <button>sign in</button>
        <button>sign up</button>
      </div>
    </header>
  );
};
