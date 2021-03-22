import React from 'react';
import { css } from '@emotion/react';
import { SearchArea, SearchResult } from '../components/organisms/search';
import { Space } from '../components/common';
import { Book } from '../lib/types';

const container = css({
  padding: '40px 0',
  textAlign: 'center',
});

const Search: React.FC = () => {
  return (
    <section css={container}>
      <SearchArea />
      <Space />
      <SearchResult books={[]} />
    </section>
  );
};

export default Search;
