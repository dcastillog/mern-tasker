import { createContext } from 'react';

export const AuthContext = createContext();

const Provider = ({ children }) => {};

// import React, { createContext, useContext, useMemo, useReducer } from 'react';

// import authReducer from '../reducers/auth';

// import axiosClient from '../config/axios';
// import tokenAuth from '../config/tokenAuth';

// import {
//   LOGIN_SUCCESS,
//   LOGIN_FAILED,
//   REGISTER_SUCCESS,
//   REGISTER_FAILED,
//   LOGOUT,
//   GET_AUTHENTICATED_USER,
// } from '../types';

// export const AuthContext = createContext();

// export const AuthContextProvider = (props) => {
//   const initialState = {
//     token: localStorage.getItem('token'),
//     authenticatedUser: null,
//     isAuthenticated: null,
//     isLoading: true,
//     msg: null,
//   };

//   const [state, dispatch] = useReducer(authReducer, initialState);

//   const login = async (data) => {
//     try {
//       const response = await axiosClient.post('/api/auth/signin', data);

//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: response.data,
//       });

//       // Obtener usuario
//       getAuthenticatedUser();
//     } catch (error) {
//       // const alert = {
//       //   msg: error.response.data.msg,
//       //   category: 'error',
//       // };
//       dispatch({
//         type: LOGIN_FAILED,
//         payload: alert,
//       });
//     }
//   };

//   const signUp = async (data) => {
//     try {
//       const response = await axiosClient.post('/api/users', data);
//       console.log(response);
//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: response.data,
//       });

//       // Obtener el usuario
//       getAuthenticatedUser();
//     } catch (error) {
//       console.log(error);
//       const alert = {
//         msg: error.response.data.msg,
//         category: 'error',
//       };
//       dispatch({
//         type: REGISTER_FAILED,
//         payload: alert,
//       });
//     }
//   };

//   const getAuthenticatedUser = async () => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       tokenAuth(token);
//     }

//     try {
//       const response = await axiosClient.get('/api/auth/user');
//       dispatch({
//         type: GET_AUTHENTICATED_USER,
//         payload: response.data.user,
//       });
//     } catch (error) {
//       dispatch({
//         type: LOGIN_FAILED,
//       });
//     }
//   };

//   const logout = () => {
//     dispatch({
//       type: LOGOUT,
//     });
//   };

//   const value = useMemo(() => {
//     return {
//       token: state.token,
//       authenticatedUser: state.authenticatedUser,
//       isAuthenticated: state.isAuthenticated,
//       isLoading: state.isLoading,
//       msg: state.msg,
//       getAuthenticatedUser,
//       login,
//       signUp,
//       logout,
//     };
//   }, [state.authenticatedUser]);

//   return (
//     <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
//   );
// };
