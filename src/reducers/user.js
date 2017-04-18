const initialState = {
  isLogged: false,
  info: {},
  isLoading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'SIGNUP':
      return {
        ...state,
        isLoading: true
      }
    case 'LOGIN_SUCCESS':
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        info: action.payload
      }
    case 'LOGIN_ERROR':
    case 'SIGNUP_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      }
    default:
      return state;
  }
}
