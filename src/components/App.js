import React, { Component } from 'react';

import NavigationBar from './NavigationBar';
import Footer from './Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
