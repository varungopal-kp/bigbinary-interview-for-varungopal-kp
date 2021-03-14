import React, { Component } from 'react';
import moment from 'moment';
import Pagination from 'react-js-pagination';

export default class list extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tableData, loading } = this.props;

    return (
      <React.Fragment>
        <div className="table-container">
          <table className="table ">
            <thead>
              <tr>
                <th>No:</th>
                <th>Launched (UTC)</th>
                <th>Location</th>
                <th>Mission</th>
                <th>Orbit</th>
                <th>Launched Status</th>
                <th>Rocket</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td className="spinner" colSpan="7">
                    <img src={require('../../images/spinner.gif')} />
                  </td>
                </tr>
              ) : tableData && tableData.data.length ? (
                tableData.data.map(_a => (
                  <tr key={_a.flight_number} className="table-row">
                    <td>{_a.flight_number}</td>
                    <td>
                      {moment(_a.launch_date_utc, 'YYYY-MM-DD HH:mm:ss').format(
                        'DD MMMM YYYY [at] hh:mm',
                      )}
                    </td>
                    <td>{_a.launch_site && _a.launch_site.site_name}</td>
                    <td>{_a.mission_name}</td>
                    <td>
                      {_a.rocket &&
                        _a.rocket.second_stage &&
                        _a.rocket.second_stage.payloads &&
                        _a.rocket.second_stage.payloads[0].orbit}
                    </td>
                    <td>
                      {_a.launch_success ? (
                        <span className="launch-status success-label">
                          Success{' '}
                        </span>
                      ) : (
                        <span className="launch-status failed-label">
                          Failed{' '}
                        </span>
                      )}
                    </td>
                    <td>{_a.rocket && _a.rocket.rocket_name}</td>
                  </tr>
                ))
              ) : (
                <tr className="no-data-row">
                  <td>No data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          activePage={+this.props.activePage}
          itemsCountPerPage={12}
          totalItemsCount={+tableData.count}
          pageRangeDisplayed={5}
          onChange={this.props.handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </React.Fragment>
    );
  }
}
