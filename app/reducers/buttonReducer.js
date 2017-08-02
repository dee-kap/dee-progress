import {
  INITIALIZE_BUTTONS,
} from '../constants/actionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case INITIALIZE_BUTTONS:
      return action.payload || null;
    default:
      return state;
  }
}