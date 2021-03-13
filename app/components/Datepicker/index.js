import React from 'react';
import { FormControl, Grid, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import DateTimeRangeContainer from 'react-advanced-datetimerange-picker';

class index extends React.Component {
  constructor(props) {
    super(props);
    let now = new Date();
    let start = moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0),
    );
    let end = moment(start)
      .add(5, 'days')
      .subtract(1, 'second');
    this.state = {
      start: start,
      end: end,
      secondDisplay: false,
    };

    this.onClick = this.onClick.bind(this);
    this.applyCallback = this.applyCallback.bind(this);
  }

  applyCallback(startDate, endDate) {
    this.setState({
      start: startDate,
      end: endDate,
    });
    this.props.onChange([startDate, endDate]);
  }

  rangeCallback(index, value) {
    console.log(index, value);
  }

  onClick() {
    let newStart = moment(this.state.start).subtract(3, 'days');
    this.setState({ start: newStart });
  }

  render() {
    let now = new Date();
    let start = moment(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0),
    );
    let end = moment(start)
      .add(1, 'days')
      .subtract(1, 'seconds');
    let ranges = {
      'Today Only': [moment(start), moment(end)],
      'Yesterday Only': [
        moment(start).subtract(1, 'days'),
        moment(end).subtract(1, 'days'),
      ],
      '3 Days': [moment(start).subtract(3, 'days'), moment(end)],
      '5 Days': [moment(start).subtract(5, 'days'), moment(end)],
      '1 Week': [moment(start).subtract(7, 'days'), moment(end)],
      '2 Weeks': [moment(start).subtract(14, 'days'), moment(end)],
      '1 Month': [moment(start).subtract(1, 'months'), moment(end)],
      '1 Year': [moment(start).subtract(1, 'years'), moment(end)],
      '15 Year': [moment(start).subtract(5, 'years'), moment(end)],
    };
    let local = {
      format: 'DD-MM-YYYY HH:mm',
      sundayFirst: false,
    };
    let maxDate = null;
    let value = `${this.state.start.format(
      'DD-MM-YYYY HH:mm',
    )} - ${this.state.end.format('DD-MM-YYYY HH:mm')}`;

    return (
      <DateTimeRangeContainer
        ranges={ranges}
        start={this.state.start}
        end={this.state.end}
        local={local}
        maxDate={maxDate}
        applyCallback={this.applyCallback}
        rangeCallback={this.rangeCallback}
        smartMode
      >
        <i className="fa fa-calendar-o" aria-hidden="true" /> Past 15 Year
        <i className="fa fa-angle-down" aria-hidden="true" />
      </DateTimeRangeContainer>
    );
  }
}
export default index;
