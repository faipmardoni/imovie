import {
  ADD_FAVOURITE_MOVIE,
  REMOVE_FAVOURITE_MOVIE,
  RESET_FAVOURITE_MOVIE,
  SET_FAVOURITE_MOVIES,
} from 'constants/actionTypes';
import { createReducer } from './initializer';
import { IFavourite, IMovieList } from './types';

const initialState: IFavourite = {
  movies: [],
};

export default createReducer(initialState, {
  [ADD_FAVOURITE_MOVIE]: (state: IFavourite, payload: IMovieList): IFavourite => ({
    ...state,
    movies: [
      ...state.movies,
      payload,
    ],
  }),
  [REMOVE_FAVOURITE_MOVIE]: (state: IFavourite, payload: string) => {
    const idx = state.movies.findIndex((m) => m.imdbID === payload);
    const newMovies = [...state.movies];
    newMovies.splice(idx, 1);

    return {
      ...state,
      movies: newMovies,
    };
  },
  [SET_FAVOURITE_MOVIES]: (state: IFavourite, payload: IMovieList[]) => ({
    ...state,
    movies: payload,
  }),
  [RESET_FAVOURITE_MOVIE]: () => ({ ...initialState }),
});
