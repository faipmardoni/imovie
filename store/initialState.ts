import { RootState } from './types';

const initialState: RootState = {
  search: {
    keyword: '',
    movies: [],
    totalResults: 0,
    loading: false,
    error: false,
  },
  favourite: {
    movies: [],
  },
};

export default initialState;
