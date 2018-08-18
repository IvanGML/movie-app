import getSearchValue from './getSearchValue';
import constants from '../constants';

describe('[ Action ] Get movies', () => {

  it('Should return something interesting. An object for example', () => {
    const payload = 'this is string';
    const result = {
      type: constants.GET_SEARCH_VALUE,
      payload,
    };
    expect(getSearchValue(payload)).toEqual(result);
  });

});