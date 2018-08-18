import sinon from 'sinon';
import fetchMovie from './getSingleMovie';
import { data } from '../../../testData/mockData';
import constants from '../constants';

describe('[ Actions ] Single Movie', () => {

  const wrapper = { fetchMovie };

  let APIgetMoviesStub;
  beforeEach(() => {
    APIgetMoviesStub = sinon.stub(wrapper, 'fetchMovie');
  });

  afterEach(() => {
    APIgetMoviesStub.restore();
  });

  it('Should return new object', async () => {
    const movieID = 55;
    const dispatchSpy = sinon.spy();
    APIgetMoviesStub.returns(Promise.resolve(data));

    await fetchMovie(movieID)(dispatchSpy);
    expect(dispatchSpy.calledOnce).toBeTruthy();
    expect(dispatchSpy.firstCall.args[0]).toEqual({ payload: data, type: constants.GET_SINGLE_MOVIE });
  });

});
