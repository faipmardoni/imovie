import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';

interface Initial {
  initialState: any;
  middleware: any[];
}

export const configureStore = ({ initialState, middleware = [] }: Initial) => {
  const devtools = typeof window !== 'undefined'
    && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

  const composeEnhancers = devtools || compose;

  const store = createStore(
    rootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...[thunk].concat(...middleware))),
  );

  return store;
};

export default configureStore;
