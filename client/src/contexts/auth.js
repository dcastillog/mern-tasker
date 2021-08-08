import { createContext, useContext, useState } from 'react';
import { getLocaleStorage, isAuthenticated } from '../lib/session';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [userLoaded, setUserLoaded] = useState(() => !!isAuthenticated());
  const [user, setUser] = useState(() => getLocaleStorage('user'));

  const signInWithEmailAndPassword = (email, password) => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  const signInWithGoogle = () => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  const signInWithGithub = () => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  const register = () => {
    try {
    } catch (e) {
      console.log(e);
    }
  };

  const value = {
    loading,
    user,
    userLoaded,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithGithub,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthValue = () => useContext(AuthContext);
