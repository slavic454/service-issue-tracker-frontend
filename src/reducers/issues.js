import { FETCH_ISSUES_SUCCESS, UPDATE_ISSUE_SUCCESS } from '../constants';

const issues = (state = [], action) => {
  switch (action.type) {
    case FETCH_ISSUES_SUCCESS:
      return action.payload;
    case UPDATE_ISSUE_SUCCESS:
      return state.map((item) => {
        return (item._id === action.payload._id) ? action.payload: item;
      });
    default:
      return state;
  }
};

export default issues;
