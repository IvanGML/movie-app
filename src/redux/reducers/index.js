import { combineReducers } from 'redux';
import movies from './getMovies';
import singleMovie from './getSingleMovie';
import searchValue from './getSearchValue';

const rootReducer = combineReducers({
  movies,
  singleMovie,
  searchValue,
});

export default rootReducer;
