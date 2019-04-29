import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as IssuesActionCreators from '../actions/issues';
import List from '../components/List';

class Issues extends React.Component {
  displayedColumns = [{ name: '_id' }, { name: 'title' }, { name: 'description' }, { name: 'status' }]

  componentDidMount() {
    const { fetchIssues } = this.props;
    fetchIssues();
  }

  render() {
    const { issues } = this.props;
    return (
      <React.Fragment>
        <List data={issues} columns={this.displayedColumns} />
        
      </React.Fragment>
    );
  }
}

Issues.defaultProps = {
  issues: [],
};

Issues.propTypes = {
  fetchIssues: PropTypes.func.isRequired,
  issues: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['open', 'pending', 'closed'])
  })),
};

const mapStateToProps = state => ({ issues: state.issues });

const mapDispatchToProps = dispatch => bindActionCreators(IssuesActionCreators, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Issues);
