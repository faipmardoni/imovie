/* eslint-disable react/no-array-index-key */
import React from 'react';
import Head from 'next/head';

import Navigation from 'components/Navigation/index';
import SearchInput from 'components/SearchInput';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Search Movie</title>
    </Head>
    <Navigation />
    <SearchInput />
  </>
);

export default Home;
