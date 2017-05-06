import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';
import Chore from './Chore';

class CompleteChoresForm extends Component {
  render() {
    console.log("my props is",this.props);
    return (
      <div className="centerAlign">
        <h3>Chores Inbox</h3>
        <div>
          <ul className="choreCompleteList">
            {this.props.assignedChores.map((chore, i) => <Chore {...chore} action='done' key={i} completeChoresRequest={this.props.completeChoresRequest} />)}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    assignedChores: state.user.info.assignedChores,
    chores: state.user.info.chores,
    errorMessage: state.chores.errorMessage
  };
};

export default connect(mapStateToProps)(CompleteChoresForm);
