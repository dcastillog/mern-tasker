import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  AppBar as MdiAppBar,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { UIContext } from '../../../contexts/ui';
import { AuthContext } from '../../../contexts/auth';

const useStyles = makeStyles((theme) => ({
  appBar: {
    flexGrow: 1,
    justifyContent: 'center',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${theme.drawerWidth}px)`,
    marginLeft: theme.drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));

const AppBar = (props) => {
  const classes = useStyles();
  const { isOpenDrawer, openDrawer } = useContext(UIContext);
  const { authenticatedUser, logout } = useContext(AuthContext);

  return (
    <MdiAppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isOpenDrawer,
      })}
    >
      <Toolbar>
        <Grid container xs={10}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openDrawer}
            edge="start"
            className={clsx(classes.menuButton, isOpenDrawer && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            {authenticatedUser ? (
              <p className="username">
                Hola <span>{authenticatedUser.name}</span>
              </p>
            ) : null}
          </Typography>
        </Grid>
        <Grid
          container
          xs={4}
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Button color="inherit" onClick={() => logout()}>
            CERRAR SESIÓN
          </Button>
        </Grid>
      </Toolbar>
    </MdiAppBar>
  );
};

AppBar.propTypes = {};

export default AppBar;
