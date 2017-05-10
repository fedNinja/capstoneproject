
import { browserHistory } from 'react-router';

import { Chore } from '../utils/choreapi';
import { Child } from '../utils/childapi';

export const APPROVE_SUCCESS = 'APPROVE_SUCCESS';
export const APPROVE_ERROR = 'APPROVE_ERROR';

function approveSuccess(payload) {
  return {
    type: APPROVE_SUCCESS,
    payload,
  };
}

function approveError(payload) {
  return {
    type: APPROVE_ERROR,
    payload,
  };
}

export function approveChoresRequest(args) {
  return async dispatch => {
    try {
      const chore = await Chore.getChoreById(args.choreId);
      let allowance;
      if(args.allowance) {
        allowance = args.allowance + chore.chore[0].allowance;
      } else {
        allowance = chore.chore[0].allowance;
      }
      const finalArgs = {
        childId: args.childId,
        allowance: allowance
      };
      const updatedChild = await Child.updateAllowance(finalArgs);
      allowance = '$'+allowance;
      localStorage.setItem('allowance', allowance);
      await dispatch(approveSuccess(updatedChild));
      browserHistory.push('/home');
    } catch (e) {
      dispatch(approveError(e));
    }
  };
}
