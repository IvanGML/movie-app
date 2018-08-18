import singleMovieReducer from './getSingleMovie';
import constants from '../constants';


const newState = {
  budget: 21000000,
  genres: ["Animation", "Comedy", "Music"],
  id: 9473,
  overview: "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced ",
  poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg"
};

describe('[ Reducers ] Get single movie', () => {
  let initialState = {
    genres: [],
    overview: '',
    release_date: '',
    runtime: 0,
  };

  it('[INITIAL] should return same state', () => {
    const action = { type: '@@INIT' };
    expect(singleMovieReducer(initialState, action)).toEqual(initialState);
  });

  it('[GET_SINGLE_MOVIE] should return same state for the action', () => {
    let newState = {
      moovie: {
        budget: 21000000,
        genres: ["Animation", "Comedy", "Music"],
        id: 9473,
        overview: "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced ",
        poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg",
      },
    };
    const action = { type: constants.GET_SINGLE_MOVIE, payload: {
      budget: 21000000,
      genres: ["Animation", "Comedy", "Music"],
      id: 9473,
      overview: "When the four boys see an R-rated movie featuring Canadians Terrance and Philip, they are pronounced ",
      poster_path: "https://image.tmdb.org/t/p/w500/mDjhs2xoEHn2IiOPOt4LZGgR8Vl.jpg",
    }};
    expect(singleMovieReducer(initialState, action)).toEqual(newState);
  });

});
