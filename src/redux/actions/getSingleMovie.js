import axios from 'axios';
import constants from '../constants';

const makeRequest = (id) => {
  const request = axios.get(`http://react-cdp-api.herokuapp.com/movies/${id}`);
  return request;
};

const fetchMovie = id => (dispatch) => {
  const request = makeRequest(id);
  return request.then((result) => {
    window.scrollTo(0, 0);
    dispatch({
      type: constants.GET_SINGLE_MOVIE,
      payload: result.data,
    });
  });
};

export { makeRequest };

export default fetchMovie;
