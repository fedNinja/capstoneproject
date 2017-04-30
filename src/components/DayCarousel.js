import React from 'react'
import { connect } from 'react-redux';

import { dayPlus, dayMinus } from '../actions/dayCarousel';

class DayCarousel extends React.Component {
    next = (e) => {
      e.preventDefault();
      this.props.dayPlus();
    }

    prev = (e) => {
      e.preventDefault();
      this.props.dayMinus();
    }

    render() {
      const { day, weekDays } = this.props.dayCarousel
        return (
          <div>
            <h3>{weekDays[day]}</h3>
            <button onClick={this.prev}>Prev</button>
            <button onClick={this.next}>Next</button>
          </div>
        );
    }
}

const mapStateToProps = (state) => {

  return {
    dayCarousel: state.dayCarousel
  }
}

export default connect(mapStateToProps, {dayPlus, dayMinus})(DayCarousel);
