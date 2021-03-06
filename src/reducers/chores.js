import { CHORE_COMPLETED_SUCCESS, CHORE_COMPLETED_ERROR } from '../actions/completeChoreAction';
import { CHORE_SUCCESS, CHORE_ERROR } from '../actions/listChores';
import { INBOX_SUCCESS, INBOX_ERROR } from '../actions/getApprovalInboxAction';
import { RECIEVE_DATA } from '../actions/addChoresAction';
import { ASSIGNED_CHORE_SUCCESS, ASSIGNED_CHORE_ERROR } from '../actions/getAssignedChoresAction'

const initialState = {
  category: '',
  chores: [],
  chore: '',
  errorMessage: '',
};


export default function reducer(state = initialState, action) {
  console.log("action is ");
  console.log(action);
  switch (action.type) {
    case 'Mealtime_Chores':
    case 'Household_Chores':
      return {
        category: action.type,
        chores: action.payload.chores,
      };
    case 'CHORES_ERROR': {
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    }
    case INBOX_SUCCESS:
    case ASSIGNED_CHORE_SUCCESS:
    case RECIEVE_DATA: {
      return {
        ...state,
        updatedChores: action.payload,
      };
    }
    case CHORE_SUCCESS:
    case CHORE_COMPLETED_SUCCESS:
      return {
        ...state,
        chore: action.chore,
      };
    case INBOX_ERROR:
    case CHORE_ERROR:
    case ASSIGNED_CHORE_ERROR:
    case CHORE_COMPLETED_ERROR:
      return {
        ...state,
        chore: action.chore,
      };
    default:
      return state;
  }
}
