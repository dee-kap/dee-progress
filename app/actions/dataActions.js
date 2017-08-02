/* eslint import/prefer-default-export: 0 */
import axios from 'axios';
import {
  FETCH_DATA,
  FETCH_DATA_FULFILLED,
  FETCH_DATA_REJECTED,
  INITIALIZE_BARS,
  INITIALIZE_BUTTONS,
} from '../constants/actionTypes';

const url = 'http://frontend-exercise.apps.staging.digital.gov.au/bars';

/**
 * Fetches bars and buttons data from the endpoint
 */
export function fetchData() {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA }); // fetch operation starts

    return axios.get(url)
      .then((response) => {
        let bars = [];
        bars = response.data.bars.map((bar, index) => {
          return { id: (index + 1).toString(), value: bar, selected: (index === 0) };
        });

        let buttons = [];
        buttons = response.data.buttons.map((button, index) => {
          return { id: (index + 1).toString(), value: button };
        });

        // fetch operation successful 
        dispatch({ type: FETCH_DATA_FULFILLED, payload: response.data });
        dispatch({ type: INITIALIZE_BARS, payload: bars });
        dispatch({ type: INITIALIZE_BUTTONS, payload: buttons });
      })
      .catch((err) => {
        dispatch({ type: FETCH_DATA_REJECTED, payload: err }); // error fetching data
      });
  };
}

