import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import middleware from './middleware';
import reducer from './reducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
  reducer(),
  {},
  composeEnhancers(
    applyMiddleware(...[thunk]
      .concat(...middleware as any[])),
  ),
);

export default store;
