import { createReducer } from './initializer';

const initialState = {};

export default createReducer(initialState, {
  DETAIL: (state: any) => ({
    ...initialState,
    ...state,
  }),
});
