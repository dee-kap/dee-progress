import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

/**
 * Applies middlware
 * router, thunk and logger middlewares are used
 */
export default (history) => {
  return applyMiddleware(
    routerMiddleware(history),
    thunk,
    logger,
  );
};