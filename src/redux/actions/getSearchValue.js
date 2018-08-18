import constants from '../constants';

export default payload => ({
  type: constants.GET_SEARCH_VALUE,
  payload,
});
