import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import AuthContext from '../../contexts/auth/authContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  const authContext = useContext(AuthContext);
  const { user, getAuthUser } = authContext;

  useEffect(() => {
    getAuthUser();
  }, [])

  return(
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {user ? <p className="username">Hola <span>{user.name}</span></p> : null}
          </Typography>
          <Button color="inherit">CERRAR SESIÓN</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}