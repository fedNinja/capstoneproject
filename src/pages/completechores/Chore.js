/**
  list of the chore Form
  Map over each list item
**/

import React, { Component } from 'react';

import './style.css';
import '../../components/flexgrid.css';

class Chore extends Component {
  state = {
    id: localStorage.getItem('userid'),
    choreId: '',
    isChecked: false
  };

  _handleCheck = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  onClick = (e) => {
    this.setState({
      choreId: this.props[0]
    });
    this.props.completeChoresRequest(this.state);
  }

  render() {
    return (
      <div>
        <hr className="partitionStyle" />
        <li className="listCompleteStyle">
          <div>
            <input
              type="checkbox"
              name="test"
              onChange={this._handleCheck}
              checked={this.state.isChecked}
              className="checkAlign"
            />
            <img
              className="imgStyle eleAlign"
              alt="choreImage"
              src={this.props[2]}
            />
            <p className="eleAlign choreAlign">
              {this.props[1]}
            </p>
            <div className="eleAlign">
              <button
                className="appRejButton appBtnStyle"
                disabled={!this.state.isChecked}
                onClick={e => this.onClick(e)}
              >
                Done
              </button>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default Chore;
