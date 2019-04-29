import {
    FETCH_ISSUES_SUCCESS, FETCH_ISSUES_REQUESTED, UPDATE_ISSUE_REQUESTED, UPDATE_ISSUE_SUCCESS, TOGGLE_EDIT_ISSUE_MODAL
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
  

  export function updateIssue(issue) {
    return {
      type: UPDATE_ISSUE_REQUESTED,
      payload: issue
    }
  }

  export function updateIssueSuccess(issue) {
    return {
      type: UPDATE_ISSUE_SUCCESS,
      payload: issue
    }
  }

  export function toggleEditIssueModal(options) {
    return {
      type: TOGGLE_EDIT_ISSUE_MODAL,
      payload: options
    }
  }
