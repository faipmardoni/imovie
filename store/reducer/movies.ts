import { createReducer } from './initializer';

const initialState = {};

export default createReducer(initialState, {
  MOVIE: (state: any) => ({
    ...initialState,
    ...state,
  }),
});
