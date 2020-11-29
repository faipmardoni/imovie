import {
  GET_MOVIE_LIST,
  GET_MOVIE_LIST_ERROR,
  GET_MOVIE_LIST_LOADING,
  RESET_MOVIE_LIST,
  SET_KEYWORD,
} from 'constants/actionTypes';

import { createReducer } from './initializer';
import { ISearch, IResultSearchMovies } from './types';

const initialState: ISearch = {
  keyword: '',
  movies: [],
  totalResults: 0,
  loading: false,
  error: false,
};

export default createReducer(initialState, {
  [SET_KEYWORD]: (state: ISearch, payload: string) => ({
    ...state,
    keyword: payload,
  }),
  [GET_MOVIE_LIST]: (state: ISearch, payload: IResultSearchMovies) => ({
    ...state,
    movies: payload.Search,
    totalResults: payload.totalResults,
    loading: false,
    error: false,
  }),
  [GET_MOVIE_LIST_LOADING]: (state: ISearch) => ({
    ...state,
    loading: true,
    error: false,
  }),
  [GET_MOVIE_LIST_ERROR]: (state: ISearch) => ({
    ...state,
    loading: false,
    error: true,
  }),
  [RESET_MOVIE_LIST]: () => ({
    ...initialState,
  }),
});
