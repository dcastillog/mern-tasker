import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Login from './views/auth/Login';
import Register from './views/auth/Register';
import Projects from './views/Projects';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );   
}

export default App;
