import getSearchValue from './getSearchValue';
import constants from '../constants';

describe('[ Reducers ] Get search value', () => {
  let state = '';

  it('[INITIAL] should return same state', () => {
    const action = { type: '@@INIT' };
    expect(getSearchValue(state, action)).toEqual(state);
  });

  it('[GET_SEARCH_VALUE] should return same state for the action', () => {
    state = 'hello';
    const action = { type: constants.GET_SEARCH_VALUE, payload: 'hello' };
    expect(getSearchValue(state, action)).toEqual(state);
  });

});
