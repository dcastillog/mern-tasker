import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './views/Auth/Login';
import SignUp from './views/Auth/SignUp';
import Home from './views/Home';

import PrivateRoute from './routers/PrivateRoute';

import { AuthContextProvider } from './contexts/auth';
import { UIContextProvider } from './contexts/ui';

import theme from './config/theme';
import tokenAuth from './config/tokenAuth';
import { ThemeProvider } from '@material-ui/styles';

// Revisar si tenemos un token
const token = localStorage.getItem('token');

if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <ProjectState>
        <TaskState></TaskState>
      </ProjectState> */}
      <UIContextProvider>
        <AuthContextProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/SignUp" component={SignUp} />
              <PrivateRoute exact path="/projects" component={Home} />
            </Switch>
          </Router>
        </AuthContextProvider>
      </UIContextProvider>
    </ThemeProvider>
  );
}

export default App;
