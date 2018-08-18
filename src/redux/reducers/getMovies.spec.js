import getMovies from './getMovies';
import constants from '../constants';
import * as mocks from '../mocks';

describe('[ Reducers ] Get movies', () => {
  const initial = {
    movies: [],
    moviesAll: [],
  };

  it('[INITIAL] should return same state', () => {
    const action = {
      type: '@@INIT',
    };
    expect(getMovies(initial, action)).toEqual(initial);
  });

  it('[GET_MOVIES] should return same state for the action', () => {
    const action = {
      type: constants.GET_MOVIES,
      payload: mocks.payload,
    };
    expect(getMovies(initial, action)).toEqual(mocks.newState);
  });

  it('[NEW_MOVIES_LIST] should return same state for the action', () => {
    const action = {
      type: constants.NEW_MOVIES_LIST,
      payload: mocks.payloadSecond,
    };
    expect(getMovies(initial, action)).toEqual(mocks.newStateSecond);
  });

});
