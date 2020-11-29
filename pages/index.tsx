/* eslint-disable react/no-array-index-key */
import React from 'react';
import Head from 'next/head';

import Navigation from 'components/Navigation/index';
import MovieList from 'widgets/MovieList';
import SearchMovie from 'widgets/SearchMovie';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Search Movie</title>
    </Head>
    <Navigation />
    <SearchMovie />
    <MovieList dataFrom="search" />
  </>
);

export default Home;
