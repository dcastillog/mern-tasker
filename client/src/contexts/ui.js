import React, { createContext, useReducer } from 'react';

import { OPEN_DRAWER, CLOSE_DRAWER } from '../types';

import uiReducer from '../reducers/ui';

export const UIContext = createContext();

export const UIContextProvider = (props) => {
  const initialState = {
    isOpenDrawer: true,
  };

  const [state, dispatch] = useReducer(uiReducer, initialState);

  const openDrawer = () => {
    dispatch({
      type: OPEN_DRAWER,
    });
  };

  const closeDrawer = () => {
    dispatch({
      type: CLOSE_DRAWER,
    });
  };

  const value = {
    ...state,
    openDrawer,
    closeDrawer,
  };

  return (
    <UIContext.Provider value={value}>{props.children}</UIContext.Provider>
  );
};
