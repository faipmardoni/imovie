/* eslint-disable react/no-array-index-key */
import React from 'react';
import Head from 'next/head';

import Navigation from 'components/Navigation/index';
import MovieList from 'widgets/MovieList';
import SearchInput from 'widgets/SearchInput';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Search Movie</title>
    </Head>
    <Navigation />
    <SearchInput />
    <MovieList />
  </>
);

export default Home;
