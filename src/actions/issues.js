import {
    FETCH_ISSUES_SUCCESS, FETCH_ISSUES_REQUESTED,
  } from '../constants';
  
  export function fetchIssues() {
    return {
      type: FETCH_ISSUES_REQUESTED,
    };
  }
  
  export function fetchIssuesSuccess(issues) {
    return {
      type: FETCH_ISSUES_SUCCESS,
      payload: issues,
    };
  }
  