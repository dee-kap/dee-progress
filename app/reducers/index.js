import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import barReducer from './barReducer';
import buttonReducer from './buttonReducer';
import dataReducer from './dataReducer';

export default combineReducers({
  originalData: dataReducer,
  bars: barReducer,
  buttons: buttonReducer,
  routing: routerReducer,
});