import constants from '../constants';

export default function (state = '', action) {
  switch (action.type) {
    case constants.GET_SEARCH_VALUE:
      return action.payload;
    default: return state;
  }
}
