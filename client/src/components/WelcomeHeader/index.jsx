import React from 'react';
import { AppBar, Button, Toolbar, Grid, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBarButton: {
    textTransform: 'none',
    padding: '10px 20px',
    color: theme.palette.text.hint,
    fontSize: '20px',
    border: 'none',
  },
  signUpText: {
    color: theme.palette.primary.main,
  },
}));

const WelcomeHeader = (props) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar color="white" elevation="0">
      <Toolbar>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <img width="70%" src="/images/logo-light.svg" alt="" />
          </Grid>
          <Grid>
            <Button variant="outlined" className={classes.appBarButton} onClick={() => history.push('/login')}>
              Login
            </Button>
            <Button variant="outlined" className={classes.appBarButton}>
              <span className={classes.signUpText}>Registrarse</span>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

WelcomeHeader.propTypes = {};

export default WelcomeHeader;
