import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ApiContext } from '../contexts/api';
import { AuthContext } from '../contexts/auth';
import { redirectIfAuthenticated } from '../lib/session';

export const withAuth = (Component) => (props) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ message: '', severity: '', status: false });
  const { activateAuth } = useContext(AuthContext);
  const history = useHistory();
  const api = useContext(ApiContext);

  useEffect(() => {
    redirectIfAuthenticated();
  }, []);

  const saveAuthAndRedirect = (data) => {
    try {
      const { user } = data;
      let { tokens = null } = data;
      activateAuth(user, tokens);
      setLoading(false);
      history.push('/home');
    } catch (error) {
      console.log({ error });
    }
  };

  const onSignInWithEmailAndPassword = async () => {
    setLoading(true);
    api
      .login()
      .then((response) => {
        saveAuthAndRedirect(response);
      })
      .catch((error) => {
        const { message } = error;
        setAlert({ message: message, severity: 'error', status: true });
        setLoading(false);
      });
  };

  const onSignUp = async (data) => {
    setLoading(true);
    api
      .signUp(data)
      .then((response) => {
        saveAuthAndRedirect(response);
      })
      .catch((error) => {
        const { message } = error;
        setAlert({ message: message, severity: 'error', status: true });
        setLoading(false);
      });
  };

  return (
    <div>
      <Component
        {...props}
        loading={loading}
        alert={alert}
        onShowAlert={setAlert}
        onSignInWithEmailAndPassword={onSignInWithEmailAndPassword}
        onSignUp={onSignUp}
      />
    </div>
  );
};
