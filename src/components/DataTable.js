import React, { Component } from 'react';

class DataTable extends Component {
  render() {
    return (
        <div className="DataTable">
          <table>
            <tr>
              {this.props.selectedColumns.map(selectedColumn => (
                <th>{selectedColumn}</th>
              ))}
            </tr>
            {this.props.data.map(row => (
              <tr>
                {this.props.selectedColumns.map(selectedColumn => (
                  <td>{row[selectedColumn]}</td>
                ))}
              </tr>
            ))}
          </table>
      </div>
    );
  }
}

export default DataTable;