import React from 'react';
import PropTypes from 'prop-types';

import { Button, Grid, Divider, makeStyles } from '@material-ui/core';
import { WelcomeFooter, WelcomeHeader } from '../components';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(5),
    marginTop: theme.spacing(10),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  titleContainer: {
    padding: '30px 130px',
  },
  title: {
    fontSize: '80px',
  },
  startsNowButton: {
    borderRadius: '20px',
    fontSize: '24px',
    fontWeight: '600',
    textTransform: 'none',
  },
}));

const Welcome = (props) => {
  const classes = useStyles();

  return (
    <>
      <WelcomeHeader />
      <main className={classes.content}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>
            Organízalo todo con <strong>tudu</strong>
          </h1>
        </div>
        <Grid container alignItems="center" justify="center">
          <Button variant="contained" color="primary" size="large" className={classes.startsNowButton}>
            Comienza ahora
          </Button>
        </Grid>
        <Grid container alignItems="center" justify="center">
          <img color="primary" width="50%" src="images/remote-team.svg" alt="Empty task" />
        </Grid>
        <Grid>
          <img width="100%" src="https://placeimg.com/1240/480/any" />
        </Grid>
        <Grid>
          <h2>Aprovecha tus tareas al máximo</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatibus dolorum soluta reprehenderit alias.
            Non porro quod molestiae est quasi impedit eaque, ducimus cupiditate suscipit ullam fugit maxime quidem
            perspiciatis..
          </p>
        </Grid>
      </main>
      <Divider></Divider>
      <WelcomeFooter />
    </>
  );
};

Welcome.propTypes = {};

export default Welcome;
