import constants from '../constants'; 

const setNewMoviesList = result => ({
  type: constants.NEW_MOVIES_LIST,
  payload: result,
});

export default setNewMoviesList;
