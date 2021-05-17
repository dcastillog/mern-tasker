import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../lib/session';

const PublicRoute = ({ component: Component, ...props }) => {
  return <Route {...props} render={(props) => (isAuthenticated() ? <Redirect to="/home" /> : <Component {...props} />)} />;
};

export default PublicRoute;
