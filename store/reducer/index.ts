import { combineReducers } from 'redux';

import detail from './detail';
import favourite from './favourite';
import movies from './movies';

export default () => combineReducers({ detail, favourite, movies });
