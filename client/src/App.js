import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import AuthContext from './contexts/auth';
import { ApiContext } from './contexts/api';
import { Api } from './lib/api';
import AppRouter from './routers/AppRouter';
import theme from './styles/materialui/theme';
import 'animate.css';

// import tokenAuth from './config/tokenAuth';

// Revisar si tenemos un token
// const token = localStorage.getItem('token');

// if (token) {
//   tokenAuth(token);
// }

const api = new Api();

function App() {
  return (
    <>
      <AuthContext.Provider>
        <ApiContext.Provider value={api}>
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </ApiContext.Provider>
      </AuthContext.Provider>
      <CssBaseline />
    </>
  );
}

export default App;
