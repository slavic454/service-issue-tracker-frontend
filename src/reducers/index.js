import { combineReducers } from 'redux';
import issues from './issues';
import editIssue from './editIssue';

const rootReducer = combineReducers({
  issues, editIssue
});

export default rootReducer;
