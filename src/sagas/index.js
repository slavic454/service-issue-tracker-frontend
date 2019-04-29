import { all, takeEvery } from 'redux-saga/effects';
import { fetchIssues, updateIssue } from './issues';
import { FETCH_ISSUES_REQUESTED, UPDATE_ISSUE_REQUESTED } from '../constants/index';

function* watchAll() {
  yield all([
    takeEvery(FETCH_ISSUES_REQUESTED, fetchIssues),
    takeEvery(UPDATE_ISSUE_REQUESTED, updateIssue),
  ]);
}

export default watchAll;
