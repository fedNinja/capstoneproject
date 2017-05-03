import React, { Component } from 'react';
import { connect } from 'react-redux';

import { completeChoresRequest } from '../../actions/completeChoreAction';
import '../../components/flexgrid.css';
import './style.css';
import Chore from './Chore';

class CompleteChoresForm extends Component {
  render() {
    return (
      <div className="centerAlign">
        <h3>Chores Inbox</h3>
        <div>
          <p> I am here </p>
          <ul className="renderedList choreCompleteList">
            {this.props.chores.map((chore, i) => <Chore {...chore} key={i} />)}
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
    errorMessage: state.chores.errorMessage,
  };
};

export default connect(mapStateToProps)(CompleteChoresForm);
