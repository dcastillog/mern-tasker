import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from '../lib/history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { Welcome, Home, Project, EnterEmail, EnterPassword, Login, ForgotPassword, NotFound } from '../pages';

const AppRouter = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <PublicRoute exact path="/login" component={Login} />
        {/* <PublicRoute exact path="/login/enter-password" component={EnterPassword} /> */}
        <PublicRoute exact path="/login/forgot-password" component={ForgotPassword} />
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/project/1" component={Project} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
