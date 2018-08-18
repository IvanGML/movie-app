import { combineReducers } from 'redux';
import movies from './getMovies';
import singleMoovie from './getSingleMovie';
import searchValue from './getSearchValue';

const rootReducer = combineReducers({
  movies,
  singleMoovie,
  searchValue,
});

export default rootReducer;
