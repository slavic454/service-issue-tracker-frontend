import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { fetchIssuesSuccess } from '../actions/issues';

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