import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import './style.css';


export default class HomePage extends Component {
  render() {
    console.log(localStorage.getItem("username"));
    return (
      <div className="homeDiv">
          <div className="avatar">
          </div>
          <div className="detailsDiv">
            <p className="dataUser">User name: {localStorage.getItem("username")}</p>
            <p className="dataUser">Email: {localStorage.getItem("email")}</p>
          </div>
          <div className="clearFix">
            <Link to="/addkid"><button className="addBtn"></button></Link>
          </div>
      </div>
    );
  }
}

//export default connect(undefined, { signup });
