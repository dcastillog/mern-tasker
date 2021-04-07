import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import { AuthContext } from "./contexts/auth";

import AppRouter from "./routers/AppRouter";
import theme from "./styles/materialui/theme";
import tokenAuth from "./config/tokenAuth";

// Revisar si tenemos un token
const token = localStorage.getItem("token");

if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <>
      <AuthContext.Provider>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </AuthContext.Provider>
      <CssBaseline />
    </>
  );
}

export default App;
