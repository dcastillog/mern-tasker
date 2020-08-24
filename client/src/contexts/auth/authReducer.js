import {
    LOGIN_SUCESS,
   LOGIN_FAILED,
   REGISTER_SUCESS,
   REGISTER_FAILED,
   LOGOUT,
   GET_USER
} from '../../types';

export default (state, action) => {
  switch(action.type){
    case LOGIN_SUCESS:
    case REGISTER_SUCESS:
      localStorage.setItem('token', action.payload.token);
      return{
        ...state,
        auth: true,
        msg: null,
        loading: false
      }
    case GET_USER:
      return {
        ...state,
        auth: true,
        user: action.payload,
        loading: false
      }
    case LOGOUT:
    case LOGIN_FAILED:
    case REGISTER_FAILED:
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        user: null,
        auth: null,
        msg: action.payload,
        loading: false
      }

    default:
      return state;
  }
}