import constants from '../constants';

const initialState = {
  genres: [],
  overview: '',
  release_date: '',
  runtime: 0,
};

const singleMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_SINGLE_MOVIE:
      return {
        movie: action.payload,
      };
    default: return state;
  }
};

export default singleMovieReducer;
