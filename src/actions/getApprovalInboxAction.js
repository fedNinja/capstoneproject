import axios from 'axios';
import { browserHistory } from 'react-router';

import { Child } from '../utils/childapi';

export const INBOX = 'INBOX';
export const INBOX_SUCCESS = 'INBOX_SUCCESS';
export const INBOX_ERROR = 'INBOX_ERROR';

function inboxSuccess(payload) {
  return {
    type: INBOX_SUCCESS,
    payload,
  };
}

function inboxError(payload) {
  return {
    type: INBOX_ERROR,
    payload,
  };
}

export function getApprovalInboxRequest() {
  return async dispatch => {
    try {
      console.log("inside get approval inbox action");
      const children = await Child.getChildren(localStorage.getItem('userid'));
      console.log(children);
      const choresForApproval = [];
      children.childs.map(async(child) => (
        choresForApproval.push(await Child.getChoresForApproval(child._id))
      ));
      console.log("After getting chores for approval");
      console.log(choresForApproval);
      const data = {
        chores: children.childs[0].choresForApproval
      }
      await dispatch(inboxSuccess(data));
      browserHistory.push('/approve');
//      const data = await Child.getChoresForApproval(args);
    } catch (e) {
      dispatch(inboxError(e));
    }
  };

}
