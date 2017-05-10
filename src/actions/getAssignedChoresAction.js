import axios from 'axios';
import { browserHistory } from 'react-router';

import { Child } from '../utils/childapi';

/**
|--------------------------------------------------
| Types
|--------------------------------------------------
*/

export const ASSIGNED_CHORE_SUCCESS = 'ASSIGNED_CHORE_SUCCESS';
export const ASSIGNED_CHORE_ERROR = 'ASSIGNED_CHORE_ERROR';
export const userid = 'userid';

/**
|--------------------------------------------------
| Actions
|--------------------------------------------------
*/

function assignedChoreSuccess(payload) {
  return {
    type: ASSIGNED_CHORE_SUCCESS,
    payload,
  };
}

function assignedChoreError(payload) {
  return {
    type: ASSIGNED_CHORE_ERROR,
    payload,
  };
}

export function getAssignedChores() {
  console.log("inside the getAssignedChores...");
  return async dispatch => {
    try {
      const assignedChores = await Child.getAssignedChores(
        localStorage.getItem('username'),
      );
      const data = {
          assignedChores: assignedChores.childs[0].assignedChores
      }
      console.log(data);
      await dispatch(assignedChoreSuccess(data));
      browserHistory.push('/completechore');
    } catch (e) {
      dispatch(assignedChoreError(e));
    }
  };
}

export function selfAssignChores() {
  console.log("inside the self assign chores...");
  return async dispatch => {
    try {
      const assignedChores = await Child.getAssignedChores(
        localStorage.getItem('username'),
      );
      await dispatch(assignedChoreSuccess(assignedChores));
      browserHistory.push(`/addchores/${assignedChores.childs[0]._id}`);
    } catch (e) {
      dispatch(assignedChoreError(e));
    }
  };
}
