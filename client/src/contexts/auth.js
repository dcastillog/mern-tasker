import React, { createContext, useState } from 'react';
import { getLocaleStorage, isAuthenticated, removeLocaleStorage, setLocaleStorage } from '../lib/session';

export const AuthContext = createContext();

const Provider = ({ children }) => {
  const [userLoaded, setUserLoaded] = useState(() => isAuthenticated());
  const [user, setUser] = useState(() => getLocaleStorage('user'));
  const value = {
    userLoaded,
    user,
    activateAuth: (authUser, tokens) => {
      setUser(authUser);
      setUserLoaded(true);
      setLocaleStorage('user', authUser);
      setLocaleStorage('tokens', tokens);
    },
    removeAuth: () => {
      setUser(null);
      setUserLoaded(false);
      removeLocaleStorage('user');
      removeLocaleStorage('tokens');
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default { Provider, Consumer: AuthContext.Consumer };
