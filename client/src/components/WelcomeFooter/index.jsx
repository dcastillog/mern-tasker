import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const WelcomeFooter = (props) => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Grid container alignItems="center" justify="space-around">
        <Grid item>Social buttons</Grid>
        <Grid item>
          <span>MIT License 2021</span>
          <span>Created By: </span>
        </Grid>
      </Grid>
    </footer>
  );
};

export default WelcomeFooter;
