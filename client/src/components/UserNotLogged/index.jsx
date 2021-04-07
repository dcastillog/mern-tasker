import React from 'react';

import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loginButton: {
    width: '40%',
    padding: '15px 10px',
  },
}));

const UserNotLogged = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        direction="column"
      >
        <h4>You're not logged</h4>
        <img
          width="40%"
          color="primary"
          src="/not-logged.svg"
          alt="Not logged"
        />
        <Button
          className={classes.loginButton}
          variant="contained"
          color="primary"
        >
          <span>Login</span>
        </Button>
      </Grid>
    </Container>
  );
};

export default UserNotLogged;
