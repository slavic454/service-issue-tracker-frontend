import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as IssuesActionCreators from '../actions/issues';
import List from '../components/List';
import Modal  from 'simple-react-modal'

class Issues extends React.Component {
  displayedColumns = [{ name: '_id' }, { name: 'title' }, { name: 'description' }, { name: 'status' }]

  componentDidMount() {
    const { fetchIssues } = this.props;
    fetchIssues();
  }

  async updateIssueAndClose(item, status) {
    const {updateIssue, toggleEditIssueModal} = this.props;
    await updateIssue({...item, status})
    toggleEditIssueModal({item: {}, showModal: false})
  }

  render() {
    const { issues, toggleEditIssueModal, editIssue } = this.props;
    return (
      <React.Fragment>
        <List onClickRow={toggleEditIssueModal} data={issues} columns={this.displayedColumns} />
        <Modal transitionSpeed={10} closeOnOuterClick={true} show={editIssue.showModal} 
          onClose={()=> { toggleEditIssueModal({item: {}, showModal: false})}} >
          <div> 
            <div className="header" > Issue ({editIssue.item._id}) </div>
            <div className="row"> Title: {editIssue.item.title} </div>
            <div className="row"> Description: {editIssue.item.description} </div>
            <div className="row"> Status: {editIssue.item.status} </div>
            <div className="row center">
              <button onClick = {() => { this.updateIssueAndClose(editIssue.item, 'open')}}> Open </button>
              <button onClick = {() => { this.updateIssueAndClose(editIssue.item, 'pending')}}> Pending </button>
              <button onClick = {() => { this.updateIssueAndClose(editIssue.item, 'closed')}}> Closed </button>
            </div>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

Issues.defaultProps = {
  issues: [],
};

Issues.propTypes = {
  fetchIssues: PropTypes.func.isRequired,
  updateIssue: PropTypes.func.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['open', 'pending', 'closed'])
  })),
};

const mapStateToProps = state => ({ issues: state.issues, editIssue: state.editIssue });

const mapDispatchToProps = dispatch => bindActionCreators(IssuesActionCreators, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Issues);
