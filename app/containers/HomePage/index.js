/**
 *
 * HomePage
 *
 */

import React from 'react';
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

import List from './list'

export function HomePage() {
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
              <i className="fa fa-calendar-o" aria-hidden="true" /> Past 15 Year
              <i className="fa fa-angle-down" aria-hidden="true" />
            </div>
            <div className="col-6">
              <select>
                <option value="all">All Launches</option>
                <option value="upcoming">Upcoming Launches</option>
                <option value="success">Succesful Launches</option>
                <option value="failed">Failed Launches</option>
              </select>
            </div>
          </div>
        </div>
        <List />
      </div>
    </React.Fragment>
  );
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
