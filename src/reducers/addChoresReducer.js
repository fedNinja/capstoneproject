/*const initialState = {
  category: '',
  chores: [],
  errorMessage: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'Household_Chores': {
      return {
        category: 'Household_Chores',
        chores: action.payload.chores,
      };
    }
    case 'Mealtime_Chores': {
      return {
        category: 'Mealtime_Chores',
        chores: action.payload.chores,
      };
    }
    case 'CHORES_ERROR': {
      return {
        ...state,
        errorMessage: action.payload.message,
      };
    }
    case 'RECIEVE_DATA': {
      return {
        ...state,
        updatedChore: action.chores,
      };
    }
    default:
      return state;
  }
}*/
