import setNewMoviesList from './setNewMoviesList';
import constants from '../constants';

describe('[ Action ] Set new movie list', ()=>{

  const payload =  {
    propFirst: 'firstProp',
    propSecond: 'secondProp',
  };
  const result = {
    type: constants.NEW_MOVIES_LIST,
    payload,
  };

  it('Should return new object', () => {
    expect(setNewMoviesList(payload)).toEqual(result);
  });
});
