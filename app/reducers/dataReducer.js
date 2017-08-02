import {
  FETCH_DATA,
  FETCH_DATA_FULFILLED,
  FETCH_DATA_REJECTED,
} from '../constants/actionTypes';

const initialState = { fetching: false, fetched: false, error: null, data: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, fetching: true, fetched: false, error: null, data: [] };
    case FETCH_DATA_FULFILLED:
      return { ...state, fetching: false, fetched: true, error: null, data: action.payload };
    case FETCH_DATA_REJECTED:
      return { ...state, fetching: false, fetched: false, error: action.payload, data: [] };
    default:
      return state;
  }
}