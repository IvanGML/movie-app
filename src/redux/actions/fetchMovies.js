import axios from 'axios';
import constants from '../constants';

const fetchMovies = (condition, value) => (dispatch) => {
  let searchValue = value ? `search=${value}&` : '';
  let searchCondition = condition ? `searchBy=${condition}&` : '';
  let requestString = `http://react-cdp-api.herokuapp.com/movies?${searchValue}${searchCondition}limit=11`;
  const request = axios.get(requestString);

  return request.then((result) => {
    dispatch({
      type: constants.GET_MOVIES,
      payload: result.data,
    });
  });
};

export default fetchMovies;
