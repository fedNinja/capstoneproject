import React, { Component } from 'react';

import '../../components/flexgrid.css';
import './style.css';

export default class AddKidForm extends Component {
  state = {
    parent: localStorage.getItem("userid"),
    childName: '',
    dateOfBirth: '',
    userName: '',
    password: '',
    email: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addkid(this.state);
  };

  render() {
    return (
      <div className="centerItem">
      <form onSubmit={this.onSubmit}>
          <h1 className="alignHeader">Add Kid for Gullak</h1>
        <div className="row">
          <label className="col formlbl">Child Name</label>
          <input
            onChange={this.onChange}
            type="text"
            name="childName"
            className="col inputStyle"
          />
        </div>
        <div className="row">
          <label className="col formlbl">UserName</label>
          <input
            onChange={this.onChange}
            type="text"
            name="userName"
            className="col inputStyle"
          />
        </div>
        <div className="row">
          <label className="col formlbl">Password</label>
          <input
            onChange={this.onChange}
            type="password"
            name="password"
            className="col inputStyle"
          />
        </div>
        <div className="row">
          <label className="col formlbl">Age</label>
          <input
            onChange={this.onChange}
            type="text"
            name="age"
            className="col inputStyle"
          />
        </div>
        <div className="row">
          <label className="col formlbl">Email</label>
          <input
            onChange={this.onChange}
            type="text"
            name="email"
            className="col inputStyle"
          />
        </div>
        <div className="row btnAlign">
          <button className="col">Add Child</button>
        </div>
      </form>
    </div>
    );
  }
}
