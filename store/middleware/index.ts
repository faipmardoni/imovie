import apiCall from 'utils/apiCall';

import promiseMiddleware from './promise';
import shuttleMiddleware from './shuttle';

const promise = promiseMiddleware(apiCall());
const shuttle = shuttleMiddleware('');

const middleware = [shuttle, promise];

export default middleware;
