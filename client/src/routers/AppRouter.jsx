import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LoginPage from '../pages/Authentication/LoginPage';
import EnterPasswordPage from '../pages/Authentication/EnterPasswordPage';

const AppRouter = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/login/enter-password" component={EnterPasswordPage} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
