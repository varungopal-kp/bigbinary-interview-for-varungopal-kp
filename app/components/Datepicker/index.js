import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';

class index extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    const start = moment(this.props.value[0]).format('MM-DD-YYYY');
    const end = moment(this.props.value[1]).format('MM-DD-YYYY');

    const ranges = {
      'Past month': [moment().subtract(1, 'month'), moment()],
      'Past 3 months': [moment().subtract(3, 'month'), moment()],
      'Past 6 months': [moment().subtract(6, 'month'), moment()],
      'Past Year': [moment().subtract(1, 'year'), moment()],
      'Past 2 Year': [moment().subtract(2, 'year'), moment()],
      'Past 15 Year': [moment().subtract(15, 'year'), moment()],
    };
    const rangesKeys = Object.keys(ranges);
   
    return (
      <DateRangePicker
        autoApply="true"
        onCallback={(start, end, label) => {
          const index = Object.keys(ranges).findIndex((_a, i) => _a == label);          
          this.props.handleDate(start, end, index);
        }}
        initialSettings={{
          startDate: start,
          endDate: end,
          ranges: ranges,
          alwaysShowCalendars: true,
        }}
      >
        <div >
          <i className="fa fa-calendar-o" aria-hidden="true" />{' '}{rangesKeys[this.props.dateLableIndex] || 'Custom Range'}
          <i className="fa fa-angle-down" aria-hidden="true" />
        </div>
      </DateRangePicker>
    );
  }
}
export default index;
