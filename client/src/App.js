import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import theme from './styles/materialui/theme';
import { ProjectsProvider, TeamsProvider, SelectedFilterProvider } from './contexts';
import { WelcomePage, HomePage, NotFoundPage, ProjectPage, TeamPage, LoginPage, ForgotPasswordPage } from './pages';

function App() {
  return (
    <SelectedFilterProvider>
      <ProjectsProvider>
        <TeamsProvider>
          <ThemeProvider theme={theme}>
            <Router>
              <Switch>
                <Route exact path="/" component={WelcomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/forgot-password" component={ForgotPasswordPage} />
                <Route exact path="/app/today" component={HomePage} />
                <Route exact path="/app/upcoming" component={HomePage} />
                <Route exact path="/app/project/:id" component={ProjectPage} />
                <Route exact path="/app/team/:id" component={TeamPage} />
                {/* <Redirect to="/app/today" /> */}
                <Route exact path="**" component={NotFoundPage} />
              </Switch>
            </Router>
          </ThemeProvider>
        </TeamsProvider>
      </ProjectsProvider>
    </SelectedFilterProvider>
  );
}

export default App;
