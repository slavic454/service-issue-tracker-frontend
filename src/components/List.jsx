import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class List extends React.Component {
  renderHeader = () => {
    const { columns } = this.props;
    return columns.map(columnConfig => (
      <th key={columnConfig.name}>
        { columnConfig.name }
      </th>
    ));
  }

  renderRows = () => {
    const { data } = this.props;
    return data.map(row => (
      <tr key={uuid()}>
        {this.renderCells(row)}
      </tr>
    ));
  }

  renderCells = (row) => {
    const { columns } = this.props;
    return (
      columns.map(columnConfig => (
        <td key={uuid()}>
          {row[columnConfig.name]}
        </td>
      ))
    );
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            {this.renderHeader()}
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}

List.defaultProps = {
  data: [],
  columns: [],
};

List.propTypes = {
  data: PropTypes.arrayOf(Object),
  columns: PropTypes.arrayOf(Object),
};


export default List;
