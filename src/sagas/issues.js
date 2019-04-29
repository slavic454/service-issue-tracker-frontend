import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { fetchIssuesSuccess, updateIssueSuccess } from '../actions/issues';

const headers = {
  'Content-Type': 'application/json',
};

export function* fetchIssues() {
  try {
    const response = yield call(axios.get, '/api/issues', { headers: { ...headers } });
    yield put(fetchIssuesSuccess(response.data.docs))
  } catch (error) {
    console.log(error);
  }
}

export function* updateIssue(action) {
  try {
    const {title, description,status,_id} = action.payload;
    const issue = {title, description, status }
    const response = yield call(axios.put,`/api/issues/${_id}`,issue,{ headers: { ...headers } });
    yield put(updateIssueSuccess(response.data))
  } catch (error) {
    console.log(error);
  }
}