import { combineReducers } from 'redux';

import detail from './detail';
import favourite from './favourite';
import search from './search';

const reducer = () => combineReducers({ detail, favourite, search });

export default reducer;
