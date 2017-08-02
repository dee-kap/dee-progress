import Main from '../containers/Main';
import { fetchData } from '../actions/dataActions';

/**
 * Called when the application is initially loaded
 * As this is the only data we need to fetch,
 * we will do it up-front
 * @param  {[type]} store [description]
 * @return {[type]}       [description]
 */
const onAppLoad = (store) => {
  const { dispatch } = store;
  dispatch(fetchData());
};

/**
 * Setup routes for the application.
 * At present there is only one route because that is all we need
 * @param  {[type]} store [description]
 * @return {[type]}       [description]
 */
const createRoutes = (store) => {
  return [{
    path: '/',
    component: Main,
    onEnter: onAppLoad(store),
  }];
};

export default createRoutes;
