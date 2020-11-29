import { ADD_FAVOURITE_MOVIE, REMOVE_FAVOURITE_MOVIE, SET_FAVOURITE_MOVIES } from 'constants/actionTypes';
import { Dispatch } from 'redux';

import { IMovieList } from 'store/reducer/types';

type AddFavourite = (movie: IMovieList) => (dispatch: Dispatch) => void
type RemoveFavourite = (imdbID: string) => (dispatch: Dispatch) => void
type SetFavouriteMovies = (movies: IMovieList[]) => (dispatch: Dispatch) => void

export const addFavourite: AddFavourite = (movie) => (dispatch) => {
  dispatch({
    type: ADD_FAVOURITE_MOVIE,
    payload: movie,
  });
};

export const removeFavourite: RemoveFavourite = (imdbID) => (dispatch) => {
  dispatch({
    type: REMOVE_FAVOURITE_MOVIE,
    payload: imdbID,
  });
};

export const setFavouriteMovies: SetFavouriteMovies = (movies) => (dispatch) => {
  dispatch({
    type: SET_FAVOURITE_MOVIES,
    payload: movies,
  });
};
