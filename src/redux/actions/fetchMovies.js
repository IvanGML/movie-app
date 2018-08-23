import axios from 'axios';
import constants from '../constants';

const fetchMovies = (condition, value) => (dispatch) => {
  let searchValue = value ? `search=${value}&` : '';
  let searchCondition = condition ? `searchBy=${condition}&` : '';
<<<<<<< HEAD
  let requestString = `https://react-cdp-api.herokuapp.com/movies?${searchValue}${searchCondition}limit=11`;
=======
  let requestString = `http://react-cdp-api.herokuapp.com/movies?${searchValue}${searchCondition}limit=10`;
>>>>>>> 91802d7766c2e26aaf1da3caa5bb2a7f84a552df
  const request = axios.get(requestString);

  return request.then((result) => {
    dispatch({
      type: constants.GET_MOVIES,
      payload: result.data,
    });
  });
};

export default fetchMovies;
