import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT,
  GET_AUTHENTICATED_USER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        msg: null,
      };

    case LOGOUT:
    case LOGIN_FAILED:
    case REGISTER_FAILED:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        authenticatedUser: null,
        isAuthenticated: null,
        isLoading: false,
        msg: action.payload,
      };
    case GET_AUTHENTICATED_USER:
      return {
        ...state,
        authenticatedUser: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
