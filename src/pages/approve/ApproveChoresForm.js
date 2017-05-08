import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';
import '../../components/flexgrid.css';
import Chore from './Chore';
//import Chore from '../completechores/Chore';

class ApproveChoresForm extends Component {
  render() {
    return (
      <div className="centerAlign">
        <h3>Approval Inbox</h3>
        <div>
          <ul className="choreApproveList">
            {this.props.chores.map((child) =>
            (child.chores.map((chore, j) => <Chore {...chore} name={child.name} childId={child.childId} action='approve' key={j} approveChoresRequest={this.props.approveChoresRequest} />) ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.chores.errorMessage,
    chores: state.chores.updatedChores
  };
};

export default connect(mapStateToProps)(ApproveChoresForm);
