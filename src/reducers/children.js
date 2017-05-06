import { GET_CHILDREN, ADD_CHILDREN, ADD_CHILDREN_SUCCESS, ADD_CHILDREN_ERROR } from '../actions/addkid';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHILDREN:
    return {
      ...state,
      data: action.children
    }
    case ADD_CHILDREN:
      return {
        ...state,
        isLoading: true,
        data: [...state.data, action.child]
      };
    case ADD_CHILDREN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_CHILDREN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};
