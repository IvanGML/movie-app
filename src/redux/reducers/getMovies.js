import constants from '../constants';

const initial = {
  movies: [],
  moviesAll: [],
};

export default function (state = initial, action) {
  switch (action.type) {
    case constants.GET_MOVIES:
      return {
        ...state,
        moviesAll: action.payload,
        movies: action.payload,
      };
    case constants.NEW_MOVIES_LIST:
      return {
        ...state,
        movies: {
          ...state.movies,
          data: action.payload,
        },
      };
    default: return state;
  }
}
