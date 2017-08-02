import React from 'react';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from 'redux';
import { Router, hashHistory } from 'react-router';
import middleware from './middleware';
import createRoutes from './routes';
import reducers from './reducers';

/**
 * Configures and returns Redux store
 * @param  middlewares configured in ../middleware
 * @return Redux store
 */
const configureStore = (middlewares) => {
  const createStoreWithMiddleware = middlewares(createStore);
  const store = createStoreWithMiddleware(reducers, {});
  return store;
};

const store = configureStore(middleware(hashHistory));
const history = syncHistoryWithStore(hashHistory, store);
const routes = createRoutes(store);

const App = () => {
  return (
    <Provider store={store}>
      <Router routes={routes} history={history} />
    </Provider>
  );
};

export default App;