import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';
import './flexgrid.css';
import './marquee.css';

class NavigationBar extends Component{
  render(){
    return(
      <div className="App-header">
      <div className="row">
          <div className="col appLogo">
            <Link to="/">Gullak</Link>
          </div>
          <div className="col">
            <ul className="headerList headerJustify">
              <li><Link to="/assign">Assign</Link></li>
              <li><Link to="/track">Track</Link></li>
              <li><Link to="/reward">Reward</Link></li>
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </div>
      </div>
      <div className="row horizontally altColor">
        <p className="col subHeader"><i>
          Making chores fun and rewarding
        </i></p>
      </div>
    </div>
    );
  }
}
export default NavigationBar;
