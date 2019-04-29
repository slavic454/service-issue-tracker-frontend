import { FETCH_ISSUES_SUCCESS } from '../constants';

const issues = (state = [], action) => {
  switch (action.type) {
    case FETCH_ISSUES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default issues;
