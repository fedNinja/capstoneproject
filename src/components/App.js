import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="appLogo">Gullak</h2>
          <ul className="headerList">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
          <hr className="lineDivider" />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
