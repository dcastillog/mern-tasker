import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from '../lib/history';
import PrivateRoute from './PrivateRoute';
import { Welcome, Home, EnterEmail, EnterPassword, ForgotPassword, NotFound } from '../pages';

const AppRouter = (props) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={EnterEmail} />
        <Route exact path="/login/enter-password" component={EnterPassword} />
        <Route exact path="/login/forgot-password" component={ForgotPassword} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
