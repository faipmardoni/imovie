import getConfig from 'next/config';
import { Dispatch } from 'redux';

import { GET_MOVIE_LIST, GET_MOVIE_LIST_LOADING, GET_MOVIE_LIST_ERROR } from 'constants/actionTypes';
import { hostMovie } from 'constants/url';

const { publicRuntimeConfig: config } = getConfig();

export type GetMovies = (keyword: string) => (dispatch: Dispatch) => void

export const getMovies: GetMovies = (keyword) => (dispatch) => {
  dispatch({
    type: [GET_MOVIE_LIST_LOADING, GET_MOVIE_LIST, GET_MOVIE_LIST_ERROR],
    shuttle: {
      path: `${hostMovie}?s=${keyword}&apikey=${config.apiKey}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });
};
