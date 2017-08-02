import reducer from '../../app/reducers/dataReducer';
import {
  FETCH_DATA,
  FETCH_DATA_FULFILLED,
  FETCH_DATA_REJECTED
} from '../../app/constants/actionTypes';

describe('dataReducer', () => {
  it('should return the initial state', () => {
    const expected = { fetching: false, fetched: false, error: null, data: [] };
    const actual = reducer(undefined, {});
    expect(actual).to.eql(expected);
  });

  it('should handle FETCH_DATA', () => {
    const expected = { fetching: true, fetched: false, error: null, data: [] };
    const actual = reducer([], {
      type: FETCH_DATA,
    });
    expect(actual).to.eql(expected);
  });

  it('should handle FETCH_DATA_FULFILLED', () => {
    const payload = { blah: 'hello' };
    const expected = { fetching: false, fetched: true, error: null, data: payload };
    const actual = reducer([], {
      type: FETCH_DATA_FULFILLED,
      payload,
    });
    expect(actual).to.eql(expected);
  });

  it('should handle FETCH_DATA_REJECTED', () => {
    const err = { err: 'Bad things happened' };
    const expected = { fetching: false, fetched: false, error: err, data: [] };
    const actual = reducer([], {
      type: FETCH_DATA_REJECTED,
      payload: err,
    });
    expect(actual).to.eql(expected);
  });
});

