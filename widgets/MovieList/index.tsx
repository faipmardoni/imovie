import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

import ButtonFavourite from 'components/ButtonFavourite';
import { RootState } from 'store/types';
import { IMovieList } from 'store/reducer/types';
import { addFavourite, removeFavourite } from 'store/actions/favourite';

interface IProps {
  dataFrom: 'search' | 'favourite';
}

type DicMovies = {
  [key: string]: boolean;
}

const ListMovie: React.FC<IProps> = ({ dataFrom }) => {
  const movies = useSelector((state: RootState) => state[dataFrom].movies);
  const loading = useSelector((state: RootState) => state.search.loading);
  const favMovies = useSelector((state: RootState) => state.favourite.movies);
  const dispatch = useDispatch();

  const favimdIDs: DicMovies = React.useMemo(() => favMovies.reduce(
    (dict, el) => ({
      ...dict,
      [el.imdbID]: true,
    }),
    {},
  ), [favMovies]);

  const handleAddFavourite = useCallback(
    (movie: IMovieList) => {
      const action = addFavourite(movie);
      dispatch(action);
    },
    [dispatch],
  );
  const handleRemoveFavourite = useCallback(
    (movie: IMovieList) => {
      const action = removeFavourite(movie.imdbID);
      dispatch(action);
    },
    [dispatch],
  );

  return (
    <Container className="mt-5">
      <Table variant="dark" striped hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>IMDB ID</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {movies?.length ? movies.map((movie) => {
            const { imdbID, Title, Year } = movie;
            const isFavourite = !!favimdIDs[imdbID];

            return (
              <tr key={imdbID}>
                <td>
                  <Link href={`/detail/${imdbID}`}>{Title}</Link>
                </td>
                <td>
                  <div>{Year}</div>
                </td>
                <td>
                  <div>{imdbID}</div>
                </td>
                <td>
                  <ButtonFavourite
                    isFavourite={isFavourite}
                    onClick={() => {
                      if (isFavourite) handleRemoveFavourite(movie);
                      else handleAddFavourite(movie);
                    }}
                  />
                </td>
              </tr>
            );
          }) : (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center' }}>
                {loading ? (
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                ) : (
                  <>No Movies were found</>
                )}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default ListMovie;
