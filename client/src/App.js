import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SigIn from './views/auth/SigIn';
import SigUp from './views/auth/SigUp';
import Home from './views/Home';

import PrivateRoute from './components/Routes/PrivateRoute';

import ProjectState from './contexts/projects/projectState';
import TaskState from './contexts/tasks/taskState';
import AlertState from './contexts/alerts/alertState';
import AuthState from './contexts/auth/authState';

import tokenAuth from './config/tokenAuth';


// Revisar si tenemos un toen
const token = localStorage.getItem('token');

if(token){
  tokenAuth(token);
}

function App() {
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={SigIn} />
                <Route exact path="/sigup" component={SigUp} />
                <PrivateRoute exact path="/projects" component={Home} />
              </Switch>
            </BrowserRouter>
          </AuthState>
        </AlertState>
      </TaskState>
    </ProjectState>
  );   
}

export default App;
