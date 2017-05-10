import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';
import '../../components/flexgrid.css';
import { getAssignedChores, selfAssignChores } from '../../actions/getAssignedChoresAction';

class KidHomePage extends Component {

onCompleteClick = (e) => {
  this.props.getAssignedChores();
}

onAssignClick = (e) => {
  this.props.selfAssignChores();
}

render() {
    const { children } = this.props;
    console.log(localStorage.getItem('username'));
    console.log(children);
    return (
      <div className="homeDiv">
        <div className="avatar" />
        <div className="detailsDiv">
          <p className="dataUser">
            User name: {localStorage.getItem('username')}
          </p>
          <p className="dataUser">Email: {localStorage.getItem('email')}</p>
          <p className="dataUser">Allowance: {localStorage.getItem('allowance')}</p>
          <button onClick={e => this.onCompleteClick(e)}>Complete Chores</button>
          <button onClick={e => this.onAssignClick(e)}>Assign Chores</button>
        </div>
      </div>
    );
  }
}

export default connect(undefined, { getAssignedChores, selfAssignChores })(KidHomePage);
