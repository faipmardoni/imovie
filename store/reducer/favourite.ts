import { createReducer } from './initializer';

const initialState = {};

export default createReducer(initialState, {
  FAVOURITE: (state: any) => ({
    ...initialState,
    ...state,
  }),
});
