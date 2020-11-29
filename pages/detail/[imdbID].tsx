import React, { useMemo } from 'react';
import { NextPage } from 'next';
import superagent from 'superagent';
import getConfig from 'next/config';
import Head from 'next/head';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import Navigation from 'components/Navigation/index';
import { defaultImage, hostMovie } from 'constants/url';

const { publicRuntimeConfig: config } = getConfig();

interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Record<'Source' | 'Source', string>[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface Props {
  imdbID?: string | string[] | undefined;
  movie: Partial<Movie>;
}

const Detail: NextPage<Props> = ({ movie }) => {
  const {
    Title,
    Year,
    Released,
    Director,
    Actors,
    Awards,
    Poster,
    ...rest
  } = movie;

  const keys = useMemo(() => [
    { label: 'Year', column: Year },
    { label: 'Release', column: Released },
    { label: 'Director', column: Director },
    { label: 'Actors', column: Actors },
    { label: 'Awards', column: Awards },
  ], []);

  type RestOption = keyof typeof rest;

  return (
    <div>
      <Head>
        <title>{Title}</title>
      </Head>
      <Navigation defaultActiveKey="/myFavourite" />
      <Container className="mt-5">
        <Card bg="dark">
          <Card.Img variant="top" style={{ maxWidth: '300px', margin: '1rem auto' }} src={Poster !== 'N/A' ? Poster : defaultImage} />
          <Card.Body>
            <Card.Title style={{ color: '#FFF', margin: '1rem 0', textAlign: 'center' }}>{Title}</Card.Title>
            <div>
              <Table variant="dark">
                <tbody>
                  {keys.map(({ label, column }) => (
                    <tr key={label}>
                      <td width="20%">
                        {label}
                      </td>
                      <td>
                        {column}
                      </td>
                    </tr>
                  ))}
                  {Object.keys(rest).map((i) => {
                    if (i === 'Ratings') {
                      return (
                        <tr key={i}>
                          <td>{i}</td>
                          <td>-</td>
                        </tr>
                      );
                    }

                    return (
                      <tr key={i}>
                        <td>{i}</td>
                        <td>{rest[i as RestOption]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

Detail.getInitialProps = async ({ query }) => {
  const { imdbID } = query;
  let result;

  try {
    const res = await superagent.post(`${hostMovie}?i=${imdbID}&apikey=${config.apiKey}`);
    result = res.body;
  } catch (error) {
    result = {};
  }

  return {
    movie: result,
  };
};

export default Detail;
