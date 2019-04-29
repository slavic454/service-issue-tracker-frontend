import { TOGGLE_EDIT_ISSUE_MODAL } from "../constants";

const editIssue = ( state = {showModal: false, item: {}}, action) => {
    switch (action.type) {
      case TOGGLE_EDIT_ISSUE_MODAL:
        return {showModal: action.payload.showModal, item: action.payload.item }
      default:
        return state;
    }
  };
  
  export default editIssue;
  