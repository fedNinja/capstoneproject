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
            <p>Allowance, chores and rewards for kids.Helping kids becoming more responsible for money.
            </p>
            <p>Making chores fun and help to improve family time by dividing responsibilities.
            </p>
          </div>
          </section>
          <section className="row aboutAlign">
            <div className="col About">
            <p>Allowance, chores and rewards for kids.Helping kids becoming more responsible for money.
            </p>
            <p>Making chores fun and help to improve family time by dividing responsibilities.
            </p>
          </div>
            <div className="col picAlign1">
            </div>
          </section>
          <section className="row aboutAlign">
            <div className="col picAlign2">
            </div>
            <div className="col About">
            <p>Allowance, chores and rewards for kids.Helping kids becoming more responsible for money.
            </p>
            <p>Making chores fun and help to improve family time by dividing responsibilities.
            </p>
          </div>
          </section>
        
    </div>
    );
  }
}

export default LandingPage;
