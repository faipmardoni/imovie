import thunk from 'redux-thunk';
import { useMemo } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import throttle from 'lodash.throttle';

import { loadState, saveState } from 'utils/localStorage';

import middleware from './middleware';
import reducer from './reducer';
import { RootState } from './types';
import initialState from './initialState';

let store: any;

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const initStore = (state?: RootState) => createStore(
  reducer(),
  state,
  composeEnhancers(
    applyMiddleware(...[thunk]
      .concat(...middleware as any[])),
  ),
);

const initState = (preloadedState?: RootState) => {
  if (preloadedState) return preloadedState;

  const favouriteMovieList = loadState();

  return {
    ...initialState,
    favourite: {
      movies: favouriteMovieList || [],
    },
  };
};

export const initializeStore = (preloadedState?: RootState) => {
  let s = store ?? initStore(initState(preloadedState));

  if (preloadedState && store) {
    s = initStore({
      ...s.getState(),
      ...preloadedState,
    });
    s = undefined;
  }

  if (typeof window === 'undefined') return s;
  if (!store) store = s;

  store?.subscribe(throttle(() => {
    saveState(store.getState().favourite.movies);
  }, 1000));

  return s;
};

export function useStore(state?: RootState) {
  const s = useMemo(() => initializeStore(state), [state]);

  return s;
}

export default initStore;
