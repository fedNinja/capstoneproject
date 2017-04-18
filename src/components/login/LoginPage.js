import React, { Component} from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../actions/user';

class LoginPage extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm userLoginRequest={userLoginRequest} />
        </div>
      </div>

    );
  }
}

LoginPage.propTypes = {
  userLoginRequest: React.PropTypes.func.isRequired
}
export default connect(null, { userLoginRequest })(LoginPage);
