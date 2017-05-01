import React, { Component } from 'react';
import {connect} from 'react-redux';


import { completeChoresRequest } from '../../actions/completeChoreAction';
import '../../components/flexgrid.css';
import './style.css';


class CompleteChoresForm extends Component{
  constructor(props){
    super(props);
    this.state={
      isComplete: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

    onChange(e) {
      e.preventDefault();
    }

    onClick(e, j) {
    }

    render(){
      const { assignedChores } = this.props;
      const { chores } = this.props;

    return(
    <div className="centerAlign">
      <h3>Chores Inbox</h3>
      {
        (assignedChores.length > 0)
        ?
        <div>
          <ul className="renderedList choreCompleteList">
                {assignedChores.map((achore, i) => (
                  <li className="listCompleteStyle" key={i}>
                    <hr className="partitionStyle" />
                    <div className="eleAlign checkAlign">
                    <input type="checkbox"
                           name="isComplete"
                           checked={this.state.isComplete}
                           className="isComplete"
                           onChange={this.handleInputChange}
                    />
                    </div>
                    <img className="imgStyle eleAlign" src={chores.map((chore, j) => (
                                          (chore._id === achore[0]) ? chore.imgurl : null
                                        ))} />
                    <p className="eleAlign">
                    {chores.map((chore, j) => (
                      (chore._id === achore[0]) ? chore.choreName : null
                    ))}
                    </p>
                    <div className="eleAlign">
                    <button className="appRejButton appBtnStyle">Done</button>
                  </div>
                  </li>
                ))}
          </ul>
        </div>
        :
          null
        }
        </div>




    );
  }
}



const mapStateToProps = (state) => {
  return {
    assignedChores:state.user.info.assignedChores,
    chores:state.user.info.chores,
    errorMessage:state.chores.errorMessage,
  }
}

export default connect(mapStateToProps)(CompleteChoresForm);
