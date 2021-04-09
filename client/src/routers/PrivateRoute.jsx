import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../contexts/auth';

const PrivateRoute = ({ component: Component, ...props }) => {
  // const { isAuthenticated, isLoading, getAuthenticatedUser } = useContext(AuthContext);

  // useEffect(() => {
  //   getAuthenticatedUser();
  // }, []);

  return (
    <Route
      {...props}
      // render={(props) => (!isAuthenticated && !isLoading ? <Redirect to="/" /> : <Component {...props} />)}
      render={(props) => (true ? <Redirect to="/home" /> : <Component {...props} />)}
    />
  );
};

export default PrivateRoute;
