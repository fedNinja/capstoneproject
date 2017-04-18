import React, {Component} from 'react';
import {store} from '../../index';

import { userSignupRequest } from '../../actions/user';
class SignupForm extends Component{
  constructor(props){
    super(props);
    this.state={
      userName:'',
      email:'',
      password:''
    }
  }

  onChange(e) {
    this.setState({[e.nativeEvent.target.name]: e.nativeEvent.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    store.dispatch(userSignupRequest(this.state));
  }

  render(){
    return(
      <form onSubmit={(e) => this.onSubmit(e) }>
        <h1>Join our community!</h1>
          <div className="form-group">
            <label className="control-label">UserName</label>
            <input
              onChange={(e) => this.onChange(e)}
              type="text"
              name="userName"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Password</label>
            <input
              onChange={(e) => this.onChange(e)}
              type="password"
              name="password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label">passwordConfirmation</label>
            <input
              onChange={(e) => this.onChange(e)}
              type="password"
              name="passwordConfirmation"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Email</label>
            <input
              onChange={(e) => this.onChange(e)}
              type="text"
              name="email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg">Sign up</button>
          </div>

      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;
