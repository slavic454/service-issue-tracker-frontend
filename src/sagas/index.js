import { all, takeEvery } from 'redux-saga/effects';
import { fetchIssues } from './issues';
import { FETCH_ISSUES_REQUESTED } from '../constants/index';

function* watchAll() {
  yield all([
    takeEvery(FETCH_ISSUES_REQUESTED, fetchIssues),
  ]);
}

export default watchAll;
