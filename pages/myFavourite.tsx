import React from 'react';
import Head from 'next/head';

import Navigation from 'components/Navigation/index';
import Container from 'react-bootstrap/Container';

const myFavourite = () => (
  <div>
    <Head>
      <title>My Favourite</title>
    </Head>
    <Navigation defaultActiveKey="/myFavourite" />
    <Container className="mt-5">
      myFavourite
    </Container>
  </div>
);

export default myFavourite;
