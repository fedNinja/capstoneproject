import React, { Component } from 'react';
import {connect} from 'react-redux';


import { approveChoresRequest } from '../../actions/approveChoresAction';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../../components/flexgrid.css';
import './style.css';


class ApproveChoresForm extends Component{
  constructor(props){
    super(props);
    this.state={
      addedChores:[]
    }
  }

    onChange(e) {
      e.preventDefault();
    }

    onClick(e, j) {
    }

    render(){
    return(
    <div>

    </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    errorMessage:state.chores.errorMessage,
  }
}

export default connect(mapStateToProps)(ApproveChoresForm);
