import React, { useState } from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

const header = css`
  height: 5rem;
  background-color: lightgreen;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

const title = css`
  line-height: 5rem;
  font-size: 24px;
  a: {
    color: #fefefe;
  }
`;

export const Header: React.FC = () => {
  const [isSignin, setIsSignin] = useState(false);

  function handleSignin() {
    setIsSignin(true);
  }
  function handleSignout() {
    setIsSignin(false);
  }

  return (
    <header css={header}>
      <div css={title}>
        <Link href="/">My Favorite Books</Link>
      </div>

      <div>
        {isSignin ? (
          <div>
            <img src="#" alt={'アイコン'} />
            <img src="#" alt="検索ボタン" />
            <button onClick={handleSignout}>sign out</button>
          </div>
        ) : (
          <div>
            <button onClick={handleSignin}>sign in</button>
            <button onClick={handleSignout}>sign up</button>
          </div>
        )}
      </div>
    </header>
  );
};
