import React, { Component } from 'react';

import './flexgrid.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <section className="col App1">
          </section>
        </div>
          <section className="row aboutAlign">
            <div className="col picAlign">
            </div>
            <div className="col About">
              <h3>Assign </h3>
              <p>Make your kids more responsible by assigning them chores.</p>
              <p>Pick from a variety of chore categories like household, personal etc. </p>
              <p>Repeat assignment for multiple days in a week.</p>
              <p>Negative chores serve as check on the kids and actually deduct allownace upon completion.</p>

          </div>
          </section>
          <section className="row aboutAlign">
            <div className="col About">
              <h3>Track </h3>
            <p>Keep track of the chores on daily/hourly basis.</p>
            <p>Approve or reject completion of the chores. </p>
            <p>Regular traction keeps kids' interest up and makes it fun and interesting.</p>
          </div>
            <div className="col picAlign1">
            </div>
          </section>
          <section className="row aboutAlign">
            <div className="col picAlign2">
            </div>
            <div className="col About">
              <h3>Reward </h3>
            <p>Instant allowance allocation upon approval of chores completion.</p>
            <p>Standard allowance associated with each chore.</p>
            <p>Bonus allowance allocated for extra chores picked by kids. </p>
            <p>Negative allowance for negative chores.</p>
          </div>
          </section>

    </div>
    );
  }
}

export default LandingPage;
