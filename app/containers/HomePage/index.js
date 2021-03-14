/**
 *
 * HomePage
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';

import Datepicker from 'components/Datepicker';
import Select from 'components/SelectField';
import List from './list';
import { getLaunches } from './actions';
import moment from 'moment';
import queryString from 'query-string';

export class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 12,
      activePage: 1,
      offset: 0,
      start: moment().subtract(15, 'year'),
      end: moment(),
      launches: 'all',
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    let params = this.state;
    if (this.props.location.search) {
      params = queryString.parse(this.props.location.search);
      this.setState({ ...params })
    }
    this.props.fetchLaunches({ ...params });
    this.props.history.push({
      pathname: '/',
      search: '?' + new URLSearchParams({ ...params }).toString(),
    });
   
  }

  componentDidUpdate(preProps, preState) {
    if (JSON.stringify(this.state) != JSON.stringify(preState)) {
      this.props.fetchLaunches({ ...this.state });
      this.props.history.push({
        pathname: '/',
        search: '?' + new URLSearchParams({ ...this.state }).toString(),
      });
    }
  }

  handlePageChange(pageNumber) {
    const offset = pageNumber * 12 - 12;
    this.setState({ activePage: pageNumber, offset });
  }

  render() {
    const { selector } = this.props;
    const options = [
      { value: 'all', label: 'All Launches' },
      { value: 'upcoming', label: 'Upcoming Launches' },
      { value: 'success', label: 'Succesful Launches' },
      { value: 'failed', label: 'Failed Launches' },
    ];
    return (
      <React.Fragment>
        <Helmet>
          <title>SpaceX</title>
          <meta name="SpaceX" content="SpaceX Dashboard Challenge" />
        </Helmet>
        <div className="container">
          <div className="filters">
            <div className="row">
              <div className="col-6">
                <Datepicker
                  onChange={e => {
                    this.setState({ start: e[0], end: e[1] });
                  }}
                />
              </div>
              <div className="col-6 launches">
                <i className="fa fa-filter" />
                <Select
                  name="launches"
                  options={options}
                  value={this.state.launches}
                  onChange={e => {
                    this.setState({ launches: e });
                  }}
                />
              </div>
            </div>
          </div>
          <List
            tableData={selector.list}
            loading={selector.loading}
            activePage={this.state.activePage}
            handlePageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}
HomePage.propTypes = {
  fetchLaunches: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  selector: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchLaunches: (params = {}) => dispatch(getLaunches(params)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
