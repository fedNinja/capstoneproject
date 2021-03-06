import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import './App.css';
import './flexgrid.css';
import './marquee.css';

class NavigationBar extends Component {
  logout(e) {
    e.preventDefault();
    console.log("Inside logout");
    localStorage.clear();
    browserHistory.push('/');
  }

  render() {
    console.log("localStorage is ");
    console.log(localStorage);
    return (
      <div className="App-header">
        <div className="row">
          <div className="col appLogo">
            {localStorage.length > 0
              ? localStorage.role == "parent"
                ? <Link to="/home">Gullak</Link>
                : <Link to="/kidhome">Gullak</Link>
              : <Link to="/">Gullak</Link>}
          </div>
          <div className="col">
            <ul className="headerList headerJustify">
              <li>
                {localStorage.length > 0
                  ? `Hello ${localStorage.getItem('username')}`
                  : <Link to="/signup">Sign up</Link>}
              </li>
              <li>
                {localStorage.length > 0
                  ? <a href="#" onClick={this.logout.bind(this)}>Logout</a>
                  : <Link to="/login">Login</Link>}
              </li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>
        </div>
        <div className="row horizontally altColor">
          <p className="col subHeader">
            <i>
              Making chores fun and rewarding
            </i>
          </p>
        </div>
      </div>
    );
  }
}


export default NavigationBar;
