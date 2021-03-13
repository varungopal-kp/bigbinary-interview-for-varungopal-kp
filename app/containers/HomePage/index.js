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

export class HomePage extends Component {
  render() {
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
                    console.log(e);
                  }}
                />
              </div>
              <div className="col-6 launches">
              <i class="fa fa-filter"></i>
                <Select
                  options={options}
                  onChange={e => {
                    console.log(e);
                  }}
                />
              </div>
            </div>
          </div>
          <List />
        </div>
      </React.Fragment>
    );
  }
}
HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
