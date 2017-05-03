import React, { Component } from 'react';
import { connect } from 'react-redux';

import { dayPlus, dayMinus } from '../actions/dayCarousel';
import './daycarousel.css';

class DayCarousel extends Component {
  next = e => {
    e.preventDefault();
    this.props.dayPlus();
  };

  prev = e => {
    e.preventDefault();
    this.props.dayMinus();
  };

  render() {
    const { day, weekDays } = this.props.dayCarousel;
    return (
      <div>
        <button className="inlineBlock btnPrevNext" onClick={this.prev}>
          Prev
        </button>
        <h3 className="inlineBlock">{weekDays[day]}</h3>
        <button className="inlineBlock btnPrevNext" onClick={this.next}>
          Next
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dayCarousel: state.dayCarousel,
  };
};

export default connect(mapStateToProps, { dayPlus, dayMinus })(DayCarousel);
