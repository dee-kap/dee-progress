import {
  SELECT_BAR,
  CHANGE_SELECTED_BAR_VALUE,
} from '../constants/actionTypes';

/**
 * Selects a bar. Handled in barReducer
 * @param  id of the bar to be selected
 */
export function selectBar(id) {
  return (dispatch) => {
    dispatch({ type: SELECT_BAR, payload: id });
  };
}

/**
 * Selects a bar. Handled in barReducer
 * @param  newValue adds the new value to the existing value of the selected bar
 */
export function changeBarValue(newValue) {
  return (dispatch) => {
    dispatch({ type: CHANGE_SELECTED_BAR_VALUE, payload: newValue });
  };
}

