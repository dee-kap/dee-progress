import reducer from '../../app/reducers/buttonReducer';
import {
  INITIALIZE_BUTTONS,
} from '../../app/constants/actionTypes';

describe('buttonReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const actual = reducer([], {
      type: undefined,
    });
    expect(actual).to.eql(expected);
  });

  it('should handle INITIALIZE_BUTTONS', () => {
    const expected = ['b1', 'b2'];
    const actual = reducer(expected, {
      type: INITIALIZE_BUTTONS,
      payload: expected,
    });
    expect(actual).to.eql(expected);
  });
});

