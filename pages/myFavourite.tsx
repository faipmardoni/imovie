import React from 'react';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';

import Navigation from 'components/Navigation/index';
import MovieList from 'widgets/MovieList';

const myFavourite = () => (
  <div>
    <Head>
      <title>My Favourite</title>
    </Head>
    <Navigation defaultActiveKey="/myFavourite" />
    <Container className="mt-5">
      <MovieList dataFrom="favourite" />
    </Container>
  </div>
);

export default myFavourite;
