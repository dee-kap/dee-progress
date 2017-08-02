import reducer from '../../app/reducers/barReducer';
import {
  INITIALIZE_BARS,
  SELECT_BAR,
  CHANGE_SELECTED_BAR_VALUE,
} from '../../app/constants/actionTypes';

describe('barReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const actual = reducer([], {
      type: undefined,
    });
    expect(actual).to.eql(expected);
  });

  it('should handle INITIALIZE_BARS', () => {
    const expected = ['b1', 'b2'];
    const actual = reducer(expected, {
      type: INITIALIZE_BARS,
      payload: expected,
    });
    expect(actual).to.eql(expected);
  });

  it('should handle SELECT_BAR', () => {
    const expected = [{ id: 1, selected: false }, { id: 2, selected: true }];
    const actual = reducer([{ id: 1, selected: false }, { id: 2, selected: false }], {
      type: SELECT_BAR,
      payload: 2,
    });
    expect(actual).to.eql(expected);
  });

  it('should handle CHANGE_SELECTED_BAR_VALUE', () => {
    const expected = [{ id: 1, selected: false, value: 19 }, { id: 2, selected: true, value: 25 }];
    const actual = reducer([
      { id: 1, selected: false, value: 19 },
      { id: 2, selected: true, value: 23 },
    ], {
      type: CHANGE_SELECTED_BAR_VALUE,
      payload: 2,
    });
    expect(actual).to.eql(expected);
  });

});