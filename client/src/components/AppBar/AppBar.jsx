import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { HiUser } from 'react-icons/hi';
import { AppBar as MdiAppBar, Button, Menu, MenuItem, Grid, Toolbar, Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';

const AppBar = ({ isOpenDrawer }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = (event) => {
    setAnchorEl(null);
  };
  // const { authenticatedUser, logout } = useContext(AuthContext);

  return (
    <MdiAppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isOpenDrawer,
      })}
    >
      <Toolbar>
        <Grid container>
          <h5>
            {/* {authenticatedUser ? (
              <p className="username">
                Hola <span>{authenticatedUser.name}</span>
              </p>
            ) : null} */}
            <p className="username">
              Hello <span>Username </span>
            </p>
          </h5>
        </Grid>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          {/* <Button color="inherit" onClick={() => logout()}>
            CERRAR SESIÓN
          </Button> */}
          <Button color="inherit" style={{ textTransform: 'none' }} onClick={handleOpenMenu}>
            <Grid container justify="flex-end" alignItems="center">
              <Grid item>
                <Typography>Name</Typography>
              </Grid>
              <Grid item>
                <Icon color="inherit">
                  <HiUser />
                </Icon>
              </Grid>
            </Grid>
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Grid>
      </Toolbar>
    </MdiAppBar>
  );
};

AppBar.propTypes = {
  isOpenDrawer: PropTypes.bool,
};

export default AppBar;
