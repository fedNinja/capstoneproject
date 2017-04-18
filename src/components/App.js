import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="appLogo">Gullak</h2>
          <ul className="headerList">
            <li>Login</li>
            <li>Signup</li>
          </ul>
          <hr className="lineDivider"/>
        </div>

        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
