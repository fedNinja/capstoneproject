import axios from 'axios';
import { browserHistory } from 'react-router';
import { Child } from '../utils/childapi';
import { Chore } from '../utils/choreapi';
import { User } from '../utils/api';

/**
|--------------------------------------------------
| Types
|--------------------------------------------------
*/

export const ADD_CHILDREN = 'ADD_CHILDREN';
export const ADD_CHILDREN_SUCCESS = 'ADD_CHILDREN_SUCCESS';
export const ADD_CHILDREN_ERROR = 'ADD_CHILDREN_ERROR';
export const GET_CHILDREN = 'GET_CHILDREN'

/**
|--------------------------------------------------
| Actions
|--------------------------------------------------
*/
export function getChildren(children) {
  return {
    type: GET_CHILDREN,
    children
  }
}

/*export function addkid(args) {
  return dispatch => {
    dispatch({ type: ADD });
    return axios
      .post('/kids', args)
      .then(res => {
        dispatch({ type: ADD_SUCCESS, payload: res.data });
        browserHistory.push('/home');
      })
      .catch(err => dispatch({ type: ADD_ERROR, payload: err }));
  };
}*/

/* replaced above fn with below fn */
export function addkid(args) {
  return async dispatch => {
    try {
      const argtemp = {
        userName: args.userName,
        password: args.password,
        role: 'child',
        email: args.email,
      };
      const uData = await User.signup(argtemp);
      console.log(uData);
      const argsRevised = args;
      argsRevised.userId = uData.user.id;
      console.log(argsRevised);
      const data = await Child.addChild(argsRevised);
      //const chores = await Chore.getChores();
      const kids = await Child.getChildren(localStorage.getItem('userid'));
      data.children = kids.childs;
      await dispatch(getChildren(kids.childs));
      console.log('data is: ');
      console.log(data);
      await dispatch({ type: ADD_CHILDREN_SUCCESS, child: data.child });
      browserHistory.push('/home');
    } catch (e) {
      dispatch({ type: ADD_CHILDREN_ERROR, payload: e });
    }
  };
}
