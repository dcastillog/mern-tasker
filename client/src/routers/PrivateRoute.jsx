import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../lib/session';

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) => (!isAuthenticated() ? <Redirect to="/login" /> : <Component {...props} />)}
    />
  );
};

export default PrivateRoute;
