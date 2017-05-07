import React, { Component } from 'react';
import { connect } from 'react-redux';

import { approveChoresRequest } from '../../actions/approveChoresAction';
import './style.css';
import '../../components/flexgrid.css';
import Chore from '../completechores/Chore';

class ApproveChoresForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isApproved: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onChange(e) {
    e.preventDefault();
  }

  onClick(e, j) {}

  render() {
    console.log("chores are ");
    console.log(this.props.chores);
    return (
      <div className="centerAlign">
        <h3>Approval Inbox</h3>
        <div>
          <ul className="choreCompleteList">
            {this.props.chores.map((child, i) =>
            (child.chores.map((chore, j) => <Chore {...chore} name={child.name} action='approve' key={j} approveChoresRequest={this.props.approveChoresRequest} />) ))}
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
