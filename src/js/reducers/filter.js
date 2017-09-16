import * as types from '../actionCreators/filter';

const initialState = types.SHOW_ALL;

const filter = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default filter;