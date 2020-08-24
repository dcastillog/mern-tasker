import React, { useReducer } from 'react';

import AuthReducer from './authReducer';
import AuthContext from './authContext';

import axiosClient from '../../config/axios';

import tokenAuth from '../../config/tokenAuth';

import {
  LOGIN_SUCESS,
  LOGIN_FAILED,
  REGISTER_SUCESS,
  REGISTER_FAILED,
  LOGOUT,
  GET_USER
} from '../../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    auth: null,
    user: null,
    msg: null,
    loading: true,
  }

  const [ state, dispatch ] = useReducer(AuthReducer, initialState);

  const registerUser = async data => {
    try {
      const response = await axiosClient.post('/api/users', data);
      console.log(response);
      dispatch({
        type: REGISTER_SUCESS,
        payload: response.data
      }) 

      // Obtener el usuario
      getAuthUser();
    } catch (error){
      console.log(error);
      const alert = {
        msg: error.response.data.msg,
        category: 'error'
      }
      dispatch({
        type: REGISTER_FAILED,
        payload: alert
      });
    }
  }

  // Retorna el usuario autenticado
  const getAuthUser = async () => {
    const token = localStorage.getItem('token');
    if(token){
      tokenAuth(token);
    }

    try {
      const response = await axiosClient.get('/api/auth')
      dispatch({
        type: GET_USER,
        payload: response.data.user
      })
    } catch (error){
      dispatch({
        type: LOGIN_FAILED
      })
    }
  }

  // Cuando el usuario inicia sesión

  const login = async data => {
    try {
      const response = await axiosClient.post('/api/auth', data);

      dispatch({
        type: LOGIN_SUCESS,
        payload: response.data
      })
      
      // Obtener usuario
      getAuthUser();
    } catch (error){
      const alert = {
        msg: error.response.data.msg,
        category: 'error'
      }

      dispatch({
        type: LOGIN_FAILED,
        payload: alert
      })
    }
  }

  // Cierra la sesión del usuario

  const logout = () => {
    dispatch({
      type: LOGOUT,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        auth: state.auth,
        user: state.user,
        msg: state.msg,
        loading: state.loading,
        registerUser,
        login,
        getAuthUser,
        logout
      }}
    >{props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;